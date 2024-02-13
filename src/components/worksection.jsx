import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ProjectCarousel from "./carousel";

gsap.registerPlugin(ScrollTrigger);

let work = [
  {
    images: [
      {
          url:  './images/browseMovies/01.jpg'
      },
      {
        url:  './images/browseMovies/02.jpg'
      },
      {
        url:  './images/browseMovies/03.jpg'
      },
      {
        url:  './images/browseMovies/04.jpg'
        
      },
    ],
    description: "BROWSE MOVIES | FRONT-END | UI | REACT. Js HTML CSS "
  },
  {
    images: [
      {
        url:  './images/dashboard/01.jpg'
      },
      {
        url:  './images/dashboard/02.jpg'
      },
      {
        url:  './images/dashboard/03.jpg'
      },
    ],
    description: "DASHBOARD | FRONT-END | UI | HTML CSS JavaScript "
  },
  {
    images: [
      {
        url:  './images/restaurant_api/01.jpg'
      },
      {
        url:  './images/restaurant_api/02.jpg'
      },
      {
        url:  './images/restaurant_api/03.jpg'
      },
      {
        url:  './images/restaurant_api/04.jpg'
      },
    ],
    description: "RESTAURANT API DEVELOPMENT | BACKEND | DBSQLite3 | PYTHON | DJANGO | DJANGO REST FRAMEWORK | INSOMNIA CLIENT "
  },
  {
    images: [
      {
        url:  './images/cynthia/01.jpg'
      },
      {
        url:  './images/cynthia/02.jpg'
      },
      {
        url:  './images/cynthia/03.jpg'
      },
      {
        url:  './images/cynthia/04.jpg'
      },
    ],
    description: "CREATIVE ANIMATED | PORTFOLIO CLONE | HTML CSS JS & GSAP |"
  },
  {
    images: [
      {
        url:  './images/caloriesml/01.jpg'
      },
      {
        url:  './images/caloriesml/02.jpg'
      },
    
    ],
    description: "MACHINE LEARNING | GRADIENT BOOSTING ALGORITHM | CALORIES BURNT PREDICTION | PYTHON DJANGO HTML CSS BOOTSTRAP |"
  },
]



export default function WorkSection() {
  const component = useRef();
  const slider    = useRef();
  const workheaing    = useRef();


  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      const tween = gsap.to(panels, {
        xPercent: -100 * (panels.length-1),
        ease: "none",
      });
     
    ScrollTrigger.create({
        trigger: slider.current,
        pin: true, 
        scrub: 1,
        // snap: 1 / (panels.length - 1),
        end: () => "+=" + slider.current.offsetWidth,
        markers: true,
        animation: tween,
    })
      
    }, component);
    return () => ctx.revert();
  }
  );

  return (
    <div className="App" ref={component}>
      <div ref={slider} className="container">
        <div className="work-container panel blue">
          <div className="work-heading-container">
            <h2 ref={workheaing} className="work-head">WORK.</h2>
          </div>
        </div>
        <div className="panel red red-div">
            {work.map((proj)=>{
              return (
                <div className="project">
                  <ProjectCarousel proj={proj}/>
                  <div className="description">
                      {proj.description}
                  </div>
                </div>
              )
            })}
        </div>
      </div>

      {/* <div className="lastContainer">Last Container</div> */}
    </div>
  );
}

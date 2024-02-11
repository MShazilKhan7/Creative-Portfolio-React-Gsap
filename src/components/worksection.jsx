import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ProjectCarousel from "./carousel";

gsap.registerPlugin(ScrollTrigger);

let work = [
  {
    images: [
      { 
        url: './images/browsemovies.jpg',
      },
      { 
        url: './images/01.jpg',
      },
      { 
        url: './images/02.jpg',
      },
      { 
        url: './images/03.jpg',
      },
      { 
        url: './images/04.jpg',
      },
    ]
  },
  {
    images: [
      { 
        url: './images/browsemovies.jpg',
      },
      { 
        url: './images/01.jpg',
      },
      { 
        url: './images/02.jpg',
      },
      { 
        url: './images/03.jpg',
      },
    ]
  },


]



export default function WorkSection() {
  const component = useRef();
  const slider    = useRef();

  
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
            <h2 className="work-head">WORK.</h2>
          </div>
        </div>

        <div className="panel red red-div">
            {work.map((proj)=>{
              return (
                <div className="project">
                  <ProjectCarousel proj={proj}/>
                  <div className="description">
                      BROWSE MOVIES | UI | HTML CSS REACT. Js  
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

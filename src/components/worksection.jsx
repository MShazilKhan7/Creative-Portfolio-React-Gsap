import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

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
        <div className="panel red red-div">ONE
                <div className="project">
                        <div className="image">
                            <img src={'./images/01.jpg'} alt="" />
                        </div>
                        <div className="description">
                            HTML | CSS | JS | API 
                        </div>
                </div>
                <div className="project">
                        <div className="image">
                            <img src={'./images/01.jpg'} alt="" />
                        </div>
                        <div className="description">
                            HTML | CSS | JS | API 
                        </div>
                </div>
                <div className="project">
                        <div className="image">
                            <img src={'./images/01.jpg'} alt="" />
                        </div>
                        <div className="description">
                            HTML | CSS | JS | API 
                        </div>
                </div>
                <div className="project">
                        <div className="image">
                            <img src={'./images/01.jpg'} alt="" />
                        </div>
                        <div className="description">
                            HTML | CSS | JS | API 
                        </div>
                </div>
        </div>
      </div>
      <div className="lastContainer">Last Container</div>
    </div>
  );
}

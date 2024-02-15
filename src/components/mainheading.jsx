import React, { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import Initial from "./initial";
function MainHeading(params) {
    // run the animations on mounting 
    const mainHeadingRef   = useRef();

    // 
    const animateFirstHeading = useCallback(()=>{
        gsap.to(mainHeadingRef.current.querySelectorAll(".firstheading span"), {
            y: "-115px",
            duration: 0.5,
            stagger: 0.06,
            delay: .8,
            // ease: "expo",
          });
    },[])

    const animateSecondHeading = useCallback(()=>{
        gsap.to(mainHeadingRef.current.querySelectorAll(".secondheading span"), {
            y: "-115px",
            duration: 0.5,
            stagger: 0.1,
            delay: .8,

          });
    },[])

    console.log(animateFirstHeading)
    useEffect(() => {
        const t = gsap.timeline();
        animateFirstHeading();
        animateSecondHeading();
    }, [animateFirstHeading, animateSecondHeading]);


    return(
    <div className="main-heading" ref={mainHeadingRef}>
        <div className="heading-continer">
            <div className="myquote sm-screen">
                <div><p>I love to learn </p></div>
                <div><p> & adopt new things</p></div>
            </div>
            <h2 className="firstheading">
                <span>C</span>
                <span>R</span>
                <span>E</span>
                <span>A</span>
                <span>T</span>
                <span>I</span>
                <span>V</span>
                <span>E</span>
            </h2>
            <h2 className="secondheading">
                <span>D</span>
                <span>E</span>
                <span>V</span>
                <span>E</span>
                <span>L</span>
                <span>O</span>
                <span>P</span>
                <span>E</span>
                <span>R</span>
            </h2>
        </div>
      
    </div>
    )
}

export default MainHeading;
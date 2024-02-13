import React, { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

// this section is after name section
gsap.registerPlugin(ScrollTrigger);
function Quotation(params) {
    const quoteContent  = useRef();
    const animateQuote = useCallback(()=>{
        gsap.to(quoteContent.current.querySelectorAll(".linebox div h2"), {
            y:"-70px",
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".linebox h2",
                markers: true,
                scroller: "body",
                // start: 'top center', 
              },
        })
    })

    useEffect(()=>{
        animateQuote();
    }, [animateQuote])

    return(
        <div ref={quoteContent} className="quotesection">
            <div className="linebox">
               <div><h2>enthusiastic about Web Technologies</h2></div>
               <div><h2>and Machine Learning. </h2></div>
               <div><h2>My expertise lies in the art of</h2></div>
               <div><h2>seamlessly merging creativity</h2></div>
               <div><h2>with user-friendly interfaces,</h2></div>
               <div><h2>resulting in truly memorable web</h2></div>
               <div><h2>experiences.</h2></div>
            </div>
        </div>
    )
}

export default Quotation;
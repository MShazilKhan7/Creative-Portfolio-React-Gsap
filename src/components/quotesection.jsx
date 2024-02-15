import React, { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";


// this section is after name section
gsap.registerPlugin(ScrollTrigger);


function Quotation(params) {

    
    const quoteContent  = useRef();
    const animateQuote = useCallback(()=>{
        gsap.to(quoteContent.current.querySelectorAll(".linebox div h2"), {
            y:"-50px",
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".linebox h2",
                scroller: "body",
                // start: 'top center', 
              },
        })
    },[])

    useEffect(()=>{
        animateQuote();
    }, [animateQuote])

    return(
        <div ref={quoteContent} className="quotesection">
            <div className="linebox">
               <div><h2>enthusiastic about Web Technologies</h2></div>
               <div><h2>and Machine Learning. My expertise</h2></div>
               <div><h2>lies in the art of seamlessly</h2></div>
               <div><h2> merging creativity with user-friendly</h2></div>
               <div><h2>interfaces, resulting in truly memorable</h2></div>
               <div><h2>web experiences.</h2></div>
            </div>
        </div>
    )
}

export default Quotation;
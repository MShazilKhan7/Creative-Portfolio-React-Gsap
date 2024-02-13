import React, { useEffect, useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";

function Follower(params) {
    const mouseFollowerRef = useRef();

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            gsap.to(mouseFollowerRef.current,{
                x: e.clientX,
                y: e.clientY,
                duration: .7,
                ease: "linear"
            })
        })
       
    })
    return(
        <div ref={mouseFollowerRef} className="follower"></div>
    )
}

export default Follower;
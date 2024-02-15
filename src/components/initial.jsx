import React, { useEffect } from "react";
import gsap from 'gsap';
import { useRef } from 'react';

function Initial(params) {
    const initial = useRef(null)
    useEffect(()=>{
        gsap.to(initial.current,{
            height: "0vh",
            duration: 2,
            // opacity: .8,
            onComplete: ()=>{
                document.querySelector('html').classList.add('scroll-enable')
            }
          })  
    },[])
    return(
      <div ref={initial} className='initial'></div>
    )
}

export default Initial;
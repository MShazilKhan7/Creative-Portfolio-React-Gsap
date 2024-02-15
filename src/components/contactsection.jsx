import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin,FaGithubSquare,FaInstagramSquare  } from "react-icons/fa";
import { IoLogoMedium } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)

let heading_1 = "lets"
let heading_2 = "connect"

function Contact(params) {
    const connectHeadingRef = useRef(null)
    const contactSectionRef = useRef(null)

    
    useEffect(()=>{
        const animation  = gsap.to(connectHeadingRef.current.querySelectorAll('span'),{
            y: "100%",
            duration: 1.3,
            stagger: 0.1,
            delay: .5,
            ease: "linear"
        })
        ScrollTrigger.create({
            trigger: contactSectionRef.current,
            start  : function Compute(){ // due to horizontal scroll
                let width = document.querySelector('.all-projects').offsetWidth;
                return "+=" + (width) + "px";
            },
            // scroller: "body",
            animation: animation,
        })
    })
    return(
        <div ref={contactSectionRef} className="contact-sect">
          <div className="lets-connect">
            <div ref={connectHeadingRef} className="connect-heading">
               <div>
                {heading_1.split('').map((i,key)=>{
                    return( <span key={key}>{i}</span>)
                })}
               </div>
               <div>
                {heading_2.split('').map((i,key)=>{
                    return( <span key={key}>{i}</span>)
                })}
               </div>
            </div>
            <div className="socials">
                <Link className="link" target="_blank" to={'https://www.linkedin.com/in/muhammadshazilkhan/'}> <FaLinkedin/></Link> 
                <Link className="link" target="_blank" to={'https://github.com/MShazilKhan7'}> <FaGithubSquare/></Link> 
                <Link className="link" target="_blank" to={'https://www.instagram.com/shazil._.khan/'}> <FaInstagramSquare/></Link> 
                <Link className="link" target="_blank" to={'https://medium.com/@shazilkhannew'}> <IoLogoMedium/></Link> 
                <Link className="link gmail" target="_blank" to={'mailto:muhammadshazilkhan3@gmail.com'}> <SiGmail/></Link> 
            </div>
          </div>

        </div>
    )
}

export default Contact;
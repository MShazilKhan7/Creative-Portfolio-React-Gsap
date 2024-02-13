import React from "react";
import { Link } from "react-router-dom";

function Contact(params) {
    // let tl  = gsap.timeline()
    // useEffect(()=>{
        
    //     tl.to('.follower', {
    //         scale: 1,
    //         duration: 2,
    //         ease: "ease",
    //     });

    //     contactBottomSectionRef.current.addEventListener("mouseover",()=>{
    //         tl.play();
    //     });

    //     contactBottomSectionRef.current.addEventListener("mouseout",()=>{
    //         tl.killTweensOf('.follower');
    //     });

      
    // })
    return(
        <div  className="contact-sect">
            <div className="top">
                <div className="left">
                    <p>WANT TO WORK <br></br> TOGETHER ?</p>
                </div>
                <div className="right">
                    <p>SEND ME A <br></br> MESSAGE </p>
                </div>
            </div>
            <div  className="bottom">
                <Link to={"mailto:muhammadshazilkhan3@gmail.com?body=My custom mail body"}><h1>MUHAMMADSHAZILKHAN3@GMAIL.COM</h1></Link>
            </div>
        </div>
    )
}

export default Contact;
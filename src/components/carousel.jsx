import React, { useRef } from "react";
import { useState } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

function ProjectCarousel({proj}){
  const [counter, setCounter] = useState(0);
  const projectImagesRef =  useRef(null)

    const shiftSlide = ()=>{
        const slides = projectImagesRef.current.querySelectorAll('.image');
        slides.forEach(slide => {
        slide.style.transform  = `translateX(-${counter*100}%)`
        });
    }
    const goPrev = () => {
    setCounter((prevCounter) => (prevCounter === 0 ? proj.images.length - 1 : prevCounter - 1));
    shiftSlide();
    };
    const goNext = () => {
      setCounter((prevCounter) => (prevCounter === proj.images.length - 1 ? 0 : prevCounter + 1));
      shiftSlide();
    };

    return(
        <div ref={projectImagesRef} className="project-images">
            {proj.images.map((image,index)=>{
                return (
                <div key={index} style={{left: `${index*100}%`}} className="image">
                    <div className="controllers">
                        <FaLongArrowAltLeft className="left" onClick={()=>goPrev()}/>
                        <FaLongArrowAltRight className="right" onClick={()=>goNext()}/>
                    </div>
                    <img src={image.url} alt="img"/>
                </div>
                )
            })}
           
        </div>
    )
}


export default ProjectCarousel;
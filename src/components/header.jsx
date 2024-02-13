import React from "react";
import { Link } from "react-router-dom";
function Header(){
    return (
<>
    <div className="header">
        <div className="name-div">
            <div className="profile-icon"></div>
            <h2>M Shazil Khan</h2>
        </div>
        <div className="undergrad">
            <h2>Undergraduate</h2>
            <h2>Engineer at Ned</h2>
        </div>
        <div className="hellow">
            <h2>hellow</h2>
        </div>
        <div className="side-navs">
            <Link to={'/'}><h2>Work</h2></Link>
            <Link to={'/'}><h2>About</h2> </Link>
            <Link to={'/'}><h2>Contact</h2></Link>
            <Link to={'https://medium.com/@shazilkhannew'}><h2>Writes</h2></Link>
        </div>
   </div>
</>
    )
}

export default Header;

 
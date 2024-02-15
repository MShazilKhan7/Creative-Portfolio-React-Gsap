import React from "react";
import { Link } from "react-router-dom";


function Header(){
    return (
<>
    <div className="header">
        <div className="name-div">
            <h2>M Shazil khan</h2>
        </div>
        <div className="undergrad">
            <h2>Undergraduate Engineer at Ned</h2>
        </div>
        <div className="side-navs">
            <Link to={'/'}><h2>Work,</h2></Link>
            <Link to={'/'}><h2>About,</h2> </Link>
            <Link to={'/'}><h2>Contact,</h2></Link>
            <Link to={'https://medium.com/@shazilkhannew'}><h2>Writes</h2></Link>
        </div>
   </div>
</>
    )
}

export default Header;

 
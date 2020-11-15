import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return ( 
        <nav className= "navbar bg-dark">
        <h1 className="text-primary" style={{fontSize:"40px"}}> Image Compressor
        </h1>
        <ul>
        <li >
        <Link to = "/login" style={{fontSize:"25px"}}>Login </Link> 
        </li>
        </ul>
        </nav>
    );
}

export default Header;
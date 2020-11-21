import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return ( 
        <nav className= "navbar bg-dark">
        <h1 className="text-primary" style={{fontSize:"35px"}}>
        <img src="https://snpi.dell.com/snp/images/products/large/en-in~Dell_Logo_V2/Dell_Logo_V2.jpg" 
        style={{width:"50px",height:"40px"}} />  Dell Image Store</h1>
        <ul>
        <li >
        <Link to = "/login" style={{fontSize:"25px"}}>Login </Link> 
        </li>
        </ul>
        </nav>
    );
}

export default Header;
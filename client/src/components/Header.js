import React from "react";
import {Link} from "react-router-dom"

function Header(){
    return(
        <nav class="navbar bg-dark">
        <h1>
          <a href="index.html"><center>Image Compressor</center></a>
        </h1>
        <ul>
          <li>
          <Link to="/register" >Register</Link></li>
          <li>
          <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    );
}

export default Header;

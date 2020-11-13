import React from "react";
import {Link} from "react-router-dom"

function Header(){
    return(
        <nav class="navbar bg-dark">
        <h1>
          <a href="index.html">Image Compressor</a>
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
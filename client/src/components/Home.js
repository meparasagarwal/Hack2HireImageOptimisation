import React from "react";
import {Link} from "react-router-dom";

function Home(){
    return (
        <section class="landing">
        <div class="dark-overlay">
          <div class="landing-inner">
            <h1 class="x-large">Image Compressor</h1>
            <p class="lead">
              Want to Compress Images?
            </p>
            <div class="buttons">
              <Link to="/register" class="btn btn-primary">Register</Link>
              <Link to="/login" class="btn btn-light">Login</Link>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Home;
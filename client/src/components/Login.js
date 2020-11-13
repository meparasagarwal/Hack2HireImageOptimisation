import React from "react";
import {Link} from "react-router-dom"

function Login(){
    return (
      <section class = "landing" >
      <div class = "dark-overlay" >
      <div class = "landing-inner" >
      <section class="container">
        <div class="alert alert-danger">
          Invalid credentials
        </div>
        <h1 class="large text-primary">Login</h1>
        <p class="lead"><i class="fas fa-user"></i>Login to your Account</p>
        <form class="form" action="dashboard.html">
          <div class="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Login" />
        </form>
        <p class="my-1">
          Don't have an account? <a href="/">Register</a>
        </p>
      </section>
      </div>
      </div>
      </section>
        
    );
}

export default Login;
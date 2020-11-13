import React from "react";

function Login(){
    return (
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
          Don't have an account? <a href="register.html">Register</a>
        </p>
      </section>
    );
}

export default Login;
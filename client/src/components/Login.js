import React from "react";
import {Link} from "react-router-dom"

function Login(){
    return (
      <section className = "landing" >
      <div className = "dark-overlay" >
      <div className = "landing-inner" >
      <section className="container">
      <h1 className="large text-primary" style={{color:"whitesmoke"}}>Login and Compress your Images</h1>
        <h1 className="large text-primary">Login</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form" action="create-profile.html">
          <div className="form-group">
            <input type="email" placeholder="Email Address" name="email" required />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/">Register</Link>
        </p>
      </section>
      </div>
      </div>
      </section>
    );
}

export default Login;
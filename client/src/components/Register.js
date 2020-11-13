import React from "react";
import {Link} from "react-router-dom";

function Register(){
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    password2:"",
  });
    return (
      <section className = "landing" >
      <div className = "dark-overlay" >
      <div className = "landing-inner" >
      <h1 style={{fontSize:"40px"}}>Want to Compress Images?</h1>
      <section clasName="container">
        <h1 className="large text-primary">Register</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form" action="create-profile.html">
          <div className="form-group">
            <input type="text" placeholder="Name" name="name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" name="email" />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </section>
      </div>
      </div>
      </section>
        
    );
}
export default Register;
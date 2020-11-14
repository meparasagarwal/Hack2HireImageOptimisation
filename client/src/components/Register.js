import React,{useState} from "react";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";

function Register(){
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    password2:"",
  });
  let history=useHistory();
  const {name,email,password,password2}=formData;
  const onChange=e=>
  setFormData({...formData,[e.target.name]:e.target.value});

  const onSubmit=async e => {
    e.preventDefault();
    if(password !== password2){
      console.log("Passwords don't match");
    }else{
      const formData={name,email,password};
      const response=await fetch("/register",{
        method:"POST",
        headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      });
      if(response.ok){
        console.log("Response Worked");
        history.push("/home");
      }
    }
  };

    return (
          <section className = "landing" >
          <div className = "dark-overlay" >
          <div className = "landing-inner" >
          <section className="container">
          <h1 className="large text-primary" style={{color:"whitesmoke"}}>Want to Compress Images?</h1>
            <h1 className="large text-primary">Register</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e=>onSubmit(e)} autoComplete="off">
              <div className="form-group">
                <input type="text" placeholder="Name" name="name" value={name} onChange={e=>onChange(e)} required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" name="email"  value={email} onChange={e=>onChange(e)} />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password} 
                  onChange={e=>onChange(e)}
                  minLength="6"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  value={password2} 
                  onChange={e=>onChange(e)}
                  minLength="6"
                />
              </div>
              <input type="submit" className="btn btn-primary" value="Register"  />
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
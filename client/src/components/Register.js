import React,{useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useHistory} from "react-router-dom";
import Header from "./Header";

function Register(){
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    password2:"",
  });
  let [alertMessage,setAlertMessage]=useState("");
  let [className,setClassName]=useState("");
  let history=useHistory();
  const {name,email,password,password2}=formData;
  const onChange=e=>
  setFormData({...formData,[e.target.name]:e.target.value});

  const onSubmit=async e => {
    e.preventDefault();
    if(password !== password2){
      setAlertMessage("Passwords don't match",'danger');
      setClassName("alert alert-danger")
    }else{
     await axios.post("/register",{
        name:name,
        email:email,
        password:password
      }).then((response)=>{history.push("/home");})
      .catch(err=>{
        if(err.response){
          setAlertMessage("Email already registered");
          setClassName("alert alert-danger");
        }else{
          console.log(err);
        }
      })
  }};

    return (
      
          <section className = "landing" >
          <Header></Header>
          <div className = "dark-overlay" >
          <div className = "landing-inner" >
          <section className="container">
          <h1 className="large text-primary" style={{color:"whitesmoke"}}>Want to be a storage saver?</h1>
          <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_fs9vyjnp.json"  background="transparent" speed="1"  
                   style={{width: "400px",height: "140px",marginLeft:"15%"}} loop autoplay></lottie-player>
            <p className="lead text-primary"><i className="fas fa-user"></i> Create Your Account</p>
            <div className={className}>{alertMessage}</div>
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
                <br></br>
                <input type="submit" className="btn btn-primary" value="Register"  />
                <p className="my">Already have an account? <Link to="/Login">Login</Link>
            </p>
              </div>
              
            </form>
            
          </section>
          </div>
          </div>
          </section>
    );
}
export default Register;
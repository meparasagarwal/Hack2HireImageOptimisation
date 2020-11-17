import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import Header from "./Header";
import axios from "axios";

function Login(){
  let history = useHistory();
  let [alertMessage,setAlertMessage]=useState("");
  let [className,setClassName]=useState("");
	useEffect(()=>{
		fetch("/home")
		.then((response)=>{
			if (response.status === 201){
        history.push("/home");
      }
    })
  });
  const [formData,setFormData]=useState({
    email:"",
    password:"",
  });
          const {email,password}=formData;
          const onChange=e=>
          setFormData({...formData,[e.target.name]:e.target.value});
        
          const onSubmit=async e => {
            e.preventDefault();
            await axios.post("/Login",{
              email:email,
              password:password
            }).then((response)=>{history.push("/home")})
            .catch(err=>{
              if(err.response){
                 setAlertMessage("Invalid credentials");
          setClassName("alert alert-danger");
              }else{
                console.log(err);
              }
            })
          }
        return (
                  <section className = "landing" >
                  <Header></Header>
                  <div className = "dark-overlay" >
                  <div className = "landing-inner" >
                  <section className="container">
                  <h1 className="large text-primary" style={{color:"whitesmoke"}}>Login and Compress Images</h1>
                    <h1 className="large text-primary">Login</h1>
                    <p className="lead"><i className="fas fa-user"></i>Login to your Account</p>
                    <div className={className}>{alertMessage}</div>
                    <form className="form" onSubmit={e=>onSubmit(e)} autoComplete="off">
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
                      <input type="submit" className="btn btn-primary" value="Login" />
                    </form>
                    <p className="my-1">
                      Already have an account? <Link to="/">Register</Link>
                    </p>
                  </section>
                  </div>
                  </div>
                  </section>
    );
};

export default Login;
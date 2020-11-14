import React,{useState} from "react";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";


function Login(){
          const [formData,setFormData]=useState({
            email:"",
            password:"",
          });
          const history=useHistory();
          const {email,password}=formData;
          const onChange=e=>
          setFormData({...formData,[e.target.name]:e.target.value});
        
          const onSubmit=async e => {
            e.preventDefault();
            const formData={email,password};
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
            }else{
              console.log("Invalid credentials");
            }
        return (
                  <section className = "landing" >
                  <div className = "dark-overlay" >
                  <div className = "landing-inner" >
                  <section className="container">
                  <h1 className="large text-primary" style={{color:"whitesmoke"}}>Login and Compress Images</h1>
                    <h1 className="large text-primary">Login</h1>
                    <p className="lead"><i className="fas fa-user"></i>Login to your Account</p>
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
                      Already have an account? <Link to="/">register</Link>
                    </p>
                  </section>
                  </div>
                  </div>
                  </section>
    );
};

export default Login;

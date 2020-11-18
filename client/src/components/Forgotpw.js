import {Fragment} from "react";
import React,{useState,useEffect} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";

function Forgotpw(){
      let history = useHistory();
      let [alertMessage, setAlertMessage] = useState("");
      let [className, setClassName] = useState("");
      const [formData, setFormData] = useState({
          email: ""
      });
      const {email}=formData;
      const onChange = e =>
          setFormData({
              ...formData,
              [e.target.name]: e.target.value
          });
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("/Forgot", {
                email: email,
            }).then((response) => {
                if (response.status === 201){
                    console.log(response)
                }
                else{
                    setAlertMessage("Invalid email");
                    setClassName("alert alert-danger")
                }
            })
            .catch(err => {
                if (err.response) {
                    setAlertMessage("Invalid credentials");
                    setClassName("alert alert-danger");
                } else {
                    console.log(err);
                }
            })
    }
    return(
        <Fragment>
        <section className = "landing" >
            <nav className= "navbar bg-dark">
        <h1 className="text-primary" style={{fontSize:"40px"}} >
		<img src="https://snpi.dell.com/snp/images/products/large/en-in~Dell_Logo_V2/Dell_Logo_V2.jpg" 
        style={{width:"40px",height:"30px"}} />  Dell Image Store</h1>
        <ul>
        <li >
        <Link to = "/login" style={{fontSize:"25px"}}>Login </Link> 
        </li>
        </ul>
        </nav>
        <div className = "dark-overlay" >
        <div className = "landing-inner" >
        
        <section class="container">
        <h1 className="large text-primary" style={{color:"whitesmoke"}}>Enter your Email</h1>
        <div className={className}>{alertMessage}</div>
        <form className="form" onSubmit={e=>onSubmit(e)} autoComplete="off">
       <div className="form-group">
                        <input type="email" placeholder="Email Address" name="email"  value={email} onChange={e=>onChange(e)} />
        </div>
        <input type = "submit"
        className = "btn btn-primary"
        value = "Forgot Password" />
        </form>
        </section>
        </div>
        </div>
    </section>
</Fragment>
    )
}

export default Forgotpw;


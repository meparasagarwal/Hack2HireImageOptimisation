import {Fragment} from "react";
import React,{useState} from "react";
import Header from "./Header";
import axios from "axios";

function Forgotpw(){
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
                email: email
            }).then((response) => {
                if (response.status === 201){
                    setAlertMessage("An Email has been sent to your mail");
                    setClassName("alert alert-success")
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
        <Header />
        <div className = "dark-overlay" >
        <div className = "landing-inner" >
        <section className="container">
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


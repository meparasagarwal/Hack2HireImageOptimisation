import React, { Fragment, useState } from 'react';
import {Link} from "react-router-dom";
import Header from "./Header";

import {useHistory} from "react-router-dom";
import {useEffect} from "react";
import axios from 'axios';

function Try(){
  return(
    <section className = "landing" >
          <Header></Header>
          <div className = "dark-overlay" >
          <div className = "landing-inner" >
          <section className="container1">
            <h3 className="large text-primary">Register</h3>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" autoComplete="off">
              <div className="form-group">
                <input type="text" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address"/>
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
                  minLength="6"
                />
              </div>
              <input type="submit" className="btn btn-primary" value="Register"  />
            </form>
            <p className="my-1">
              Already have an account? <Link to="/Login">Login</Link>
            </p>
          </section>
          </div>
          </div>
          </section>
  )
}

export default Try;
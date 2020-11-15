import React, {Fragment} from "react";
import './App.css';
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Try from "./components/Try";

function App() {
    return (
        <Router>
        <Fragment>
        <section>
        <Switch>
        <Route exact path = "/"component = {Register }/>   
        <Route exact path = "/login"
        component = {
            Login
        }/>   
        <Route exact path = "/home"
        component = {
            Home
        }/>  
        <Route exact path = "/try"
        component = {
            Try
        }/> 
        </Switch>
        </section>   
        </Fragment>   
        </Router>
        
    );
}

export default App;
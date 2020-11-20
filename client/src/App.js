import React, {Fragment} from "react";
import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import ForgotPw from "./components/Forgotpw";
import Resize from "./components/Resize";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
    return (
        <Router>
        <Fragment>
        <section>
        <Switch>
        <Route exact path = "/" component = {Register }/>   
        <Route exact path = "/Login" component = {Login}/>
        <Route exact path = "/home" component = {Home}/>
        <Route exact path = "/forgotpw" component = {ForgotPw}/>
        <Route exact path = "/Resize" component = {Resize}/>
        </Switch>
        </section>   
        </Fragment>   
        </Router>
        
    );
}

export default App;
import React, {Fragment} from "react";
import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Images from "./components/Images";
import Try from "./components/Try";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Message from "./components/Message";

function App() {
    return (
        <Router>
        <Fragment>
        <section>
        <Switch>
        <Route exact path = "/" component = {Register }/>   
        <Route exact path = "/Login" component = {Login}/>
        <Route exact path = "/home" component = {Home}/> 
        <Route exact path = "/images" component = {Images}/> 
        <Route exact path = "/try" component = {Try}/>
        </Switch>
        </section>   
        </Fragment>   
        </Router>
        
    );
}

export default App;
import React, {Fragment} from "react";
import './App.css';
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
    return (
        <Router>
        <Fragment>
        <Header></Header>
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
        </Switch>
        </section>   
        </Fragment>   
        </Router>
        
    );
}

export default App;
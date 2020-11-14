import React, {Fragment} from "react";
import './App.css';
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
        <Router>
        <Fragment>
        <Header></Header>
        <section>
        <Route exact path = "/"
        component = {
            Register
        }/>   
        <Route exact path = "/login"
        component = {
            Login
        }/>   
        <
        Route exact path = "/home"
        component = {
            Home
        }/>   
        </section>   
        </Fragment>   
        </Router>
        </Provider>
        
    );
}

export default App;
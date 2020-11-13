import React,{Fragment} from "react";
import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
    <Fragment>
    <Header />
    <Route exact path="/" component={Home} />
    <section>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    </section>
    </Fragment>
    </Router>
  );
}

export default App;

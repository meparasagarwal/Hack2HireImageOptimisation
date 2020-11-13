import React,{Fragment} from "react";
import './App.css';
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
    <Fragment>
    <Header />
    <section>
    <Route exact path="/" component={Register} />
    <Route exact path="/login" component={Login} />
    </section>
    </Fragment>
    </Router>
  );
}

export default App;

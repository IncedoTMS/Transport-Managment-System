import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UserDB from "./components/UserDB/UserDB";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import "./App.css";

const App = () => {

  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Signin}>
            <Signin />
          </Route>
          <Route path="/signup" component={Signup}>
            <Signup />
          </Route>
          <Route path="/dashboard" component={UserDB}></Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import Dashboard from "./components/Dashboard";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";

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
          <Route path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;

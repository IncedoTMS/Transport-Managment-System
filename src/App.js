import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import UserDB from "./components/UserDB/UserDB";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Signin}>
              <Signin />
            </Route>
            <Route path="/signup" component={Signup}>
              <Signup />
            </Route>
            <Route path="/dashboard" component={UserDB}></Route>
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;

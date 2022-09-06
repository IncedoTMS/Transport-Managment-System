import React from "react";
import { Route, Switch } from "react-router-dom";
import UserDB from "./components/UserDB/UserDB";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import NoMatch from "./components/Common/NoMatch";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Signin}>
            <Signin />
          </Route>
          <Route exact path="/signup" component={Signup}>
            <Signup />
          </Route>
          <Route exact path="/dashboard" component={UserDB}></Route>
          <Route path="*" component={NoMatch}></Route>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;

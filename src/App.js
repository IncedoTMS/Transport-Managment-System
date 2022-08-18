import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Signup from './components/Signup/Signup';
import Signin from "./components/Signin/Signin";
import Dashboard from "./components/Dashboard";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <Header></Header>
      <Router>

        <Switch>
          <Route exact path='/' component={Signin}>
            <Signin />
          </Route>
          <Route path='/signup' component={Signup}>
            <Signup />
          </Route>
          <Route path='/dashboard' component={Dashboard}>

          </Route>
        </Switch>

      </Router>

      <Footer></Footer>

    </>
  );
}

export default App;

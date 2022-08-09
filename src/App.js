import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Signup from './components/Signup';
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
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

    </>
  );
}

export default App;

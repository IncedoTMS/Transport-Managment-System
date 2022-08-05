import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Signup from './components/Signup';
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Router>

        { /* These Buttons below are routing links to components */}
        {/* <Link to="/">{<button type="button" class="btn btn-outline-primary">Dashboard</button>}</Link>
        <Link to="/signin">{<button type="button" class="btn btn-outline-primary">Signin</button>}</Link>
        <Link to="/signup">{<button type="button" class="btn btn-outline-primary">Signup</button>}</Link> */}

        {/* <Route exact path="/" component={Signin} /> */}
        {/* <Route path="/signin" component={Dashboard} /> */}
        {/* <Route path="/signup" component={Signup} /> */}

      

      <Switch>
      <Route exact path='/' component={Signin}>
        <Signin/>
      </Route>
      <Route path='/signup' component={Signup}> 
      <Signup/>                  
      </Route>
      <Route path='/dashboard' component={Dashboard}>

      </Route>
    </Switch>

    </Router>

    </>
  );
}

export default App;

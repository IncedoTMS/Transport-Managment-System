import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Signup from './components/Signup/Signup';
import Signin from "./components/Signin/Signin";
import UserDB from "./components/userDashboard/UserDB/UserDB"
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Admin from './components/admin/Admin';
import CreateAccount from "./components/createAccount/CreateAccount";

function App() {
  return (
    <>
    <Header />
    
      <Router>
      
        <Switch>
          <Route exact path='/' component={Signin}>
            <Signin />
          </Route>
          <Route path='/signup' component={CreateAccount}>
          <CreateAccount />
          </Route>
          <Route path='/dashboard' component={UserDB}>
          </Route>

          <Route path ='/admin' component={Admin}>

          </Route>
        </Switch>

      </Router>
      <hr/> <hr/> <hr/> <hr/> <hr/> <hr/>
      <Footer/>

    </>
  );
}

export default App;

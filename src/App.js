import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Signin from "./singin/Signin";
import Signup from "./signup/Signup";


function App() {
  return (
    <>
      <Router>
        {/*
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Dashboard</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/signin">Signin</a>
                </li>
                <li class="nav-item dropdown">
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./signup" aria-disabled="false">Signup</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
            </div>
          </div>
        </nav> */

          //********************* This part of the code is a <NAVBAR> which is still in progress.*****************//
        }
        
        { /* These Buttons below are routing links to components */}
        <Link to="/">{<button type="button" class="btn btn-outline-primary">Dashboard</button>}</Link>
        <Link to="/signin">{<button type="button" class="btn btn-outline-primary">Signin</button>}</Link>
        <Link to="/signup">{<button type="button" class="btn btn-outline-primary">Signup</button>}</Link>

        <Route exact path="/" component={Dashboard} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />

      </Router>

      {/* <Switch>
      <Route exact path='/'>
        <Dashboard/>
      </Route>
      <Route path='/signup'>
        <Signup/>                     //==> Testig Routing Algorithm
      </Route>
      <Route path='/signin'>
        <Signin/>
      </Route>
    </Switch> */}



    </>
  );
}

export default App;

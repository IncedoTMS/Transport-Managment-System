import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      {/* <Router>
        <Link to="/">
          {
            <button type="button" class="btn btn-outline-primary">
              Dashboard
            </button>
          }
        </Link>
        <Link to="/signin">
          {
            <button type="button" class="btn btn-outline-primary">
              Signin
            </button>
          }
        </Link>
        <Link to="/signup">
          {
            <button type="button" class="btn btn-outline-primary">
              Signup
            </button>
          }
        </Link>

        <Route exact path="/" component={Dashboard} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Router> */}

      <Switch>
        <Route exact path="/" component={Signin}>
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/dashboard" component={Dashboard}></Route>
      </Switch>
    </>
  );
}

export default App;

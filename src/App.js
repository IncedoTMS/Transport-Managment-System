import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import UserDB from "./components/UserDB/UserDB";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Signin}>
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/dashboard" component={UserDB}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

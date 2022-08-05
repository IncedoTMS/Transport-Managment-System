import React from "react";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import Dashboard from "./Dashboard";

import Signup from "./Signup";

export default function Signin() {
  const History = useHistory();
  const routeToSignup = () => {
    History.push("/signup");
  };

  const toDashBoard = () => {
    History.push("/dashboard");
  };

  return (
    <>
      <Helmet>
        <title>Incedo-TMS-SignIn</title>
      </Helmet>

      <div>
        Signin
        <button onClick={routeToSignup}>Signup</button>
        <button onClick={toDashBoard}>Signin</button>
      </div>
    </>
  );
}

import React from "react";
import { Helmet } from "react-helmet"; //React Helmet use to Dynamically set what's in the document's head section.
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
        {/*Changes the Title bar of the current page to-Incedo-TMS-SignIn */}
      </Helmet>
      <div>
        Signin
        <button onClick={routeToSignup}>Signup</button>
        <button onClick={toDashBoard}>Signin</button>
      </div>
    </>
  );
}

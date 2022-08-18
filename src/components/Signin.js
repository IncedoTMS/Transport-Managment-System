import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";

export default function Signin() {
  const History = useHistory();
  const routeToSignup = () => {
    History.push("/signup");
  };

  const toDashBoard = () => {
    History.push("/dashboard");
  };

  return (
    <div>
      Signin
      <button onClick={routeToSignup}>Signup</button>
      <button onClick={toDashBoard}>Signin</button>
    </div>
  );
}

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";

export default function Signup() {
  const History = useHistory();
  const routeToSignin = () => {
    History.push("/");
  };

  return (
    <div>
      Signup
      <button onClick={routeToSignin}>Signin</button>
    </div>
  );
}

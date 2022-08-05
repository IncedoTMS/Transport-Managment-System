import React from "react";
import { Helmet } from "react-helmet";
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
    <>
      <Helmet>
        <title>Incedo-TMS-Register</title>
      </Helmet>
      <div>
        Signup
        <button onClick={routeToSignin}>Signin</button>
      </div>
    </>
  );
}

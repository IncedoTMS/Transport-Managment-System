import React from "react";
import { Helmet } from "react-helmet"; //React Helmet use to Dynamically set what's in the document's head section.
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
        {/*Changes the Title bar of the current page to-Incedo-TMS-Register */}
      </Helmet>

      <div>
        Signup
        <button onClick={routeToSignin}>Signin</button>
      </div>
    </>
  );
}

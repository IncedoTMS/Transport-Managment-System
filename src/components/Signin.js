import React from "react";
import { Helmet } from "react-helmet";

import { useHistory } from "react-router-dom";

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
        <title>Incedo-TMS-Sign-in</title>
      </Helmet>

      <div>
        Signin
        <button onClick={routeToSignup}>Signup</button>
        <button onClick={toDashBoard}>Signin</button>
      </div>
    </>
  );
}

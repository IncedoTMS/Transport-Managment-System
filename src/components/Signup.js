import React from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Signup() {
  const History = useHistory();
  const routeToSignin = () => {
    History.push("/");
  };

  return (
    <>
      <Helmet>
        <title>Incedo-TMS-Sign-Up</title>
      </Helmet>
      <div>
        Signup
        <button onClick={routeToSignin}>Signin</button>
      </div>
    </>
  );
}

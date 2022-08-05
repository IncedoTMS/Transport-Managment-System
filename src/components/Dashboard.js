import React from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Dashboard() {
  const History = useHistory();
  const backToSignin = () => {
    History.push("/");
  };
  return (
    <>
      <Helmet>
        <title>Incedo-TMS-Dashboard</title>
      </Helmet>
      <div>Dashboard</div>
      <button onClick={backToSignin}>logout</button>
    </>
  );
}

import React from "react";
import { Helmet } from "react-helmet"; //React Helmet use to Dynamically set what's in the document's head section.
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const History = useHistory();
  const backToSignin = () => {
    History.push("/");
  };
  return (
    <>
      <Helmet>
        <title>Incedo-TMS-Dashboard</title>
        {/*Changes the Title bar of the current page to-Incedo-TMS-Dashboard */}
      </Helmet>
      <div>Dashboard</div>
      <button onClick={backToSignin}>logout</button>
    </>
  );
}

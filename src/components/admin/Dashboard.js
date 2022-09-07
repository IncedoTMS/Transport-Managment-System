import React from "react";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const History = useHistory();
  const backToSignin = () => {
    History.push("/");
  };
  return (
    <>
      <div>Dashboard</div>
      <button onClick={backToSignin}>logout</button>
    </>
  );
}

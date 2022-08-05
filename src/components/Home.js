import React from "react";
import "./Home.css";
import left from "./Left.svg";

function Home() {
  return (
    <div className="container">
      <p className="text">
        <h4>Transportation Hub</h4>
      </p>
      <img src={left} alt="" className="img" />
    </div>
  );
}

export default Home;

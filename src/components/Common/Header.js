import React from "react";
import "./Header.css";
import thehub from "./inet_logo.png";

function Header() {
  return (
    <React.Fragment>
      <div className="header">
        <div>
          <a href="https://thehub.incedoinc.com/">
            <img src={thehub} alt="" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;

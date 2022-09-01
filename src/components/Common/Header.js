import React, { useEffect } from "react";
import "./Header.css";
import thehub from "./inet_logo.png";
import { useHistory, useState } from "react-router-dom";

const Header = () => {
  

  const isSignInPage = window.location.pathname === "/";

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
};

export default Header;

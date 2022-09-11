import React from "react";
import "./Header.css";
import thehub from "./inet_logo.png";
import Menu from "./Menu";
import { useRouteMatch } from "react-router-dom";
import { userData } from "./../Signin/Signin";

function Header() {
  const loadedData = JSON.parse(localStorage.getItem("loadedData"));
  const isDashboard = useRouteMatch("/dashboard");
  const isAdmin = useRouteMatch("/admin");
  return (
    <React.Fragment>
      <div className="header">
        {isDashboard ? (
          <>
            <a href="https://thehub.incedoinc.com/" target="_blank">
              <img src={thehub} alt="" />
            </a>
            {/* <Menu userData={userData} /> */}
            <Menu userData={loadedData} />
          </>
        ) : (
          <>
            <a href="https://thehub.incedoinc.com/" target="_blank">
              <img src={thehub} alt="" />
            </a>
          </>
        )}
      </div>
    </React.Fragment>
  );
}

export default Header;

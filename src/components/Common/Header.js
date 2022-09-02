import React from "react";
import "./Header.css";
import thehub from "./inet_logo.png";
import Menu from "./Menu";

function Header() {
  return (
    <React.Fragment>
      <div className="header">
        {window.location.pathname === "/" || "" ? (
          <a href="https://thehub.incedoinc.com/">
            <img src={thehub} alt="" />
          </a>
        ) : (
          <>
            <a href="https://thehub.incedoinc.com/">
              <img src={thehub} alt="" />
            </a>

            <Menu />
          </>
        )}
      </div>
    </React.Fragment>
  );
}

export default Header;

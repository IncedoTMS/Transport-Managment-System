import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Signin from "./Signin";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import UserDB from "./components/UserDB/UserDB";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();

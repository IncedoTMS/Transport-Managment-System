import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet"; //React Helmet use to Dynamically set what's in the document's head section.
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";
import "./Signin.scss";
import axios from "axios";
import swal from "sweetalert";
import { gridTabIndexCellSelector } from "@mui/x-data-grid";

var userData = "";

export default function Signin() {
  //setting token for session storage

  const token = localStorage.getItem("token");
  let loggedIn = true;
  if (token == null) {
    loggedIn = false;
  }
  //
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
    roleId: "",
  });

  const emailValidation = (email) => {
    const emailValidator = /^([a-z\d\.\_])+@incedoinc.com/;
    if (!emailValidator.test(email) && email !== "") {
      setMessage("invalid email");
    } else {
      setMessage("");
    }
  };

  const handleOnChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const History = useHistory();

  const routeToSignup = () => {
    History.push("/signup");
  };

  const login = async (e) => {
    emailValidation(e);

    await axios
      .post(
        "https://tms-incedo-demo.azurewebsites.net/api/v1/user/login",
        loginData
      )
      .then((res) => {
        if (res.data.firstName) {
          userData = res.data;
          localStorage.setItem("token", "qwertyuiop");
          localStorage.setItem("loadedData", JSON.stringify(userData));
          loggedIn = true;
          if (res.data.roleId === 2) History.push("/dashboard");
          else if (res.data.roleId === 1) History.push("/manager");
          else if (res.data.roleId === 3) History.push("/createuser");
        } else {
          swal({
            title: "Error",
            text: "Invalid/Incomplete Credentials!",
            icon: "error",
            button: "OK",
          });
        }
      })
      .catch((error) => {
        swal({
          title: "Error",
          text: "Invalid/Incomplete Credentials!",
          icon: "error",
          button: "OK",
        });
      });
  };

  return (
    <>
      {/* Check if logged in */}
      {/* {loggedIn ? <Redirect to="/dashboard" /> : null} */}
      <div className="pageTwo">
        <Helmet>
          <title>Incedo-TMS-SignIn</title>
        </Helmet>

        <div className="row">
          <div className="column one col-sm">
            <img src="img.jpg" />
          </div>
          <div className="column two col-sm">
            <div className="formbox">
              <div className="mb-3">
                <h3 className="sign-in-h3">Sign In</h3>
              </div>

              <form>
                <div className="form-content">
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      name="userName"
                      onChange={handleOnChange}
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="example@incedoinc.com"
                    />
                    <p>{message}</p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleOnChange}
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <br />
                  <div className="mb-3">
                    <label className="form-label"> Role &nbsp;</label>
                    <select
                      name="roleId"
                      onChange={handleOnChange}
                      class="required"
                    >
                      <option selected disabled>
                        Select a role
                      </option>
                      <option value="1">Manager</option>
                      <option value="2">User</option>
                      <option value="3">Admin</option>
                    </select>
                  </div>
                </div>
              </form>

              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  e={email}
                  onClick={login}
                  className="btn btn-primary signin-button"
                >
                  Sign-In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { userData };

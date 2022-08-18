import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet"; //React Helmet use to Dynamically set what's in the document's head section.
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import "./Signup.scss";

export default function Signup() {
  const History = useHistory();
  const routeToSignin = () => {
    History.push("/");
  };

  const [formData, setformdata] = useState({
    firstName: "",
    lastName: "",
    empCode: 15,
    email: "",
    password: "",
    phone: "",
    roleId: 1,
    addressId: null,
  });

  function submitHandler() {
    console.log("axios", formData);
    axios
      .post("https://localhost:44371/api/v1/user", formData)
      .then((response) => console.log(response));
  }
  function clicker(e) {
    console.log("e=", e);
    const name = e.target.name;
    const value = e.target.value;
    console.log("name=", name);
    console.log("value=", value);
    setformdata({ ...formData, [name]: value });
    console.log("formdata", formData);
  }

  return (
    <div class="pageOne">
      <Helmet>
        <title>Incedo-TMS-Register</title>
        {/*Changes the Title bar of the current page to-Incedo-TMS-Register */}
      </Helmet>
      <div>
        <div className="row">
          <div className="column">
            <img src="img.jpg" />
          </div>
          <div className="two">
            <div className="formbox">
              <div className="headings">
                <h4 className="left">Create Account</h4>
              </div>
              <div className="myForm">
                <div>
                  <form action="./" method="get">
                    <div class="row">
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="First Name"
                          name="firstName"
                          onChange={clicker}
                          required
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Last Name"
                          name="lastName"
                          onChange={clicker}
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email Address"
                          name="email"
                          onChange={clicker}
                          required
                        />
                      </div>
                      <div class="col">
                        <input
                          type="digit"
                          class="form-control"
                          placeholder="Phone number"
                          name="phone"
                          onChange={clicker}
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Password"
                          name="password"
                          onChange={clicker}
                          required
                        />
                      </div>
                      <div class="col">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="confirm password"
                          name="password"
                          onChange={clicker}
                          required
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <input
                          type="text"
                          class="form-control add1"
                          placeholder="Address Line 1"
                          name="address"
                          required
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Address line 2"
                          name="address2"
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Pin Code"
                          name="Phno"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      class="btn btn-primary btn-lg"
                      onClick={submitHandler}
                    >
                      Register
                    </button>
                    <p className="para">
                      Have an account?{" "}
                      <a onClick={routeToSignin} style={{ color: "blue" }}>
                        Log In
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

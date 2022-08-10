import React, { useState } from "react";
import { Helmet } from "react-helmet"; //React Helmet use to Dynamically set what's in the document's head section.
import "./Signin.css";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = () => {
    const emailValidator = /^([a-z\d\.\_])+@incedoinc.com/;
    if (!emailValidator.test(email) && email !== "") {
      setMessage("Email is Invalid");
    } else {
      setMessage("");
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Incedo-TMS-SignIn</title>
        {/*Changes the Title bar of the current page to-Incedo-TMS-SignIn */}
      </Helmet>

      <div className="row">
        <div className="column one col-sm">
          <h2>Image Here</h2>
        </div>
        <div className="column two col-sm">
          <div className="formbox">
            <div className="welcome d-flex justify-content-around">
              <h3 className="sign-in-h3">Sign In</h3>
              <p className="register-link">
                New to Transportation Hub? <a href="#">Register</a>
              </p>
            </div>

            <form>
              <div className="form-content">
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    onChange={handleOnChange}
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="example@gmail.com"
                  />
                  <p>{message}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>
            </form>

            <div className="d-flex justify-content-end forget-password">
              <a href="#">Forget Password</a>
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="submit"
                e={email}
                onClick={emailValidation}
                className="btn btn-primary signin-button"
              >
                Sign-In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

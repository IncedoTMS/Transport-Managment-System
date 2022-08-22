import React, { useState } from "react";
import { Helmet } from "react-helmet"; //React Helmet use to Dynamically set what's in the document's head section.
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import "./Signin.scss";
import axios from "axios";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password,setPassword]= useState("");
  const [message, setMessage] = useState("");
  const b=true;

  const emailValidation = (email) => {
    const emailValidator = /^([a-z\d\.\_])+@incedoinc.com/;
    if (!emailValidator.test(email) && email !== "") {
      setMessage("Email is Invalid");
    } else {
      setMessage("");
    }
  };

  const [loginData, setLoginData]= useState({
    userName: "",
    password: ""
  });

  const handleOnChange = (e) => {
    setLoginData({...loginData, [e.target.name]: e.target.value});
    console.log(loginData);
  };

  const History = useHistory();
    
    const routeToSignup = () => {
          History.push('/signup');
    };



    const  login= async ()=>{
      emailValidation();

     await axios.post('https://localhost:44371/api/v1/user/login',loginData).then((res)=>{
       History.push('/dashboard');

      }).catch((error)=>{
        alert(error);
      })
    }


  return (
    <div className="pageTwo">
      <Helmet>
        <title>Incedo-TMS-SignIn</title>
        {/*Changes the Title bar of the current page to-Incedo-TMS-SignIn */}
      </Helmet>

      <div className="row">
        <div className="column one col-sm">
          <img src="img.jpg"/>
        </div>
        <div className="column two col-sm">
          <div className="formbox">
            <div className="welcome d-flex justify-content-around">
              <h3 className="sign-in-h3">Sign In</h3>
              <p className="register-link">
                New to Transportation Hub? <a onClick={routeToSignup}>Register</a>
              </p>
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
                    placeholder="example@gmail.com"
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
              </div>
            </form>

            <div className="d-flex justify-content-end forget-password">
              <a href="#">Forget Password</a>
            </div>

            <div className="d-flex justify-content-center">
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
  );
}
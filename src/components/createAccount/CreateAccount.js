import React, { useState, useRef } from "react";
import emailjs, { init } from "@emailjs/browser";
import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { borderRadius } from "@mui/system";
import axios from "axios";
import "./CreateAccount.scss";
import swal from "sweetalert";
import { Redirect } from "react-router-dom";

var pWord = "";

const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-=",
};

const getKey = [
  function upperCase() {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function lowerCase() {
    return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
  },
  function number() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function symbol() {
    return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
  },
];

// import svg from './cab';

function CreateAccount() {
  var localData = JSON.parse(localStorage.getItem("loadedData"));
  console.log(localData.roleId);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    empCode: "",
    email: "",
    password: "",
    roleId: 2,
    office: "",
    projectId: "",
    manager: "",
    projectName: "",
    department: "",
    managerId: "",
    managerName: "",
    managerEmail: "",
    addressDetails: "",
  });

  const [message, setMessage] = useState({
    email: "",
    password: "",
    empCode: "",
    phone: "",
    projectId: "",
    managerId: "",
    managerEmail: "",
  });

  const [showMessage, setShowMessage] = useState({});

  const changeHandler = (e) => {
    e.preventDefault();
    let key = e.target.name;
    let value = e.target.value;

    emailValidation(e);

    setUserData({ ...userData, [key]: value });
  };

  function randomPasswordGenerator() {
    let password = "";
    while (12 > password.length) {
      let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
      password += keyToAdd();
    }

    return password;
  }

  const form = useRef();
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    let p = await randomPasswordGenerator();

    await setUserData({ ...userData, password: p });
    console.log(userData);

    await axios
      .post("https://tms-incedo-demo.azurewebsites.net/api/v1/user", userData)
      .then((resp) => {
        console.log(resp);

        var data = {
          service_id: "service_qlr0527",
          template_id: "template_fc6ueu4",
          user_id: "sCNQRic4STP4B_tW_",
          template_params: {
            uemail: userData.email,
            password: userData.password,
            name: userData.firstName,
            receiversEmail: userData.email,
          },
        };

        window.$.ajax("https://api.emailjs.com/api/v1.0/email/send", {
          type: "POST",
          data: JSON.stringify(data),
          contentType: "application/json",
        })
          .done(function () {
            console.log("Your mail is sent!");
          })
          .fail(function (error) {
            console.log("Oops... " + JSON.stringify(error));
          });

        swal({
          title: "Done",
          text: "Account Created Successfully",
          icon: "success",
          button: "OK",
        });
      })
      .catch((e) => {
        console.log(e);
        swal({
          title: "Error Occured",
          text: "Data Entered is Invalid/Incomplete",
          icon: "error",
          button: "OK",
        });
      });
  };

  const emailValidation = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    const emailValidator = /^([a-z\d\.\_])+@incedoinc.com/;

    let c1 = !emailValidator.test(value) || value == "";
    let c2 = value.length != 10 || value.length == 0;
    let c3 = value.length != 6 || value.length == 0;

    console.log(key, value);

    if (key == "email") {
      if (!emailValidator.test(value) && value != "") {
        setMessage({ ...message, [key]: "Invalid" });
      } else {
        setMessage({ ...message, [key]: "" });
      }
    }

    if (key == "phone") {
      if (value.length != 10 && value.length != 0) {
        setMessage({ ...message, [key]: "Invalid" });
      } else {
        setMessage({ ...message, [key]: "" });
      }
    }

    if (key == "empCode") {
      if (value.length != 6 && value.length != 0) {
        setMessage({ ...message, [key]: "Invalid" });
      } else {
        setMessage({ ...message, [key]: "" });
      }
    }

    if (key == "managerId") {
      if (value.length != 6 && value.length != 0) {
        setMessage({ ...message, [key]: "Invalid" });
      } else {
        setMessage({ ...message, [key]: "" });
      }
    }

    if (key == "managerEmail") {
      if (!emailValidator.test(value) && value != "") {
        setMessage({ ...message, [key]: "Invalid" });
      } else {
        setMessage({ ...message, [key]: "" });
      }
    }

    return !(c1 && c2 && c3);
  };

  const paperStyle = {
    padding: 20,
    height: "90%",
    width: "90%",
    marginTop: "5%",
    marginBottom: "30px",
    marginLeft: "50px",
  };
  const avatarStyle = { backgroundColor: "#1696d6", borderRadius: "50%" };
  const textStyle = { margin: "8px 20px", width: "40%" };

  return (
    <>
      {localData.roleId != 1 ? <Redirect to="/" /> : null}

      <div className="row" style={{ display: "flex", marginTop: "3%" }}>
        <div
          className="col one"
          style={{
            width: "50%",
            margin: "auto",
            height: "80%",
            float: "left",
          }}
        >
          <img
            src="cab.svg"
            style={{
              width: "80%",
              height: "60%",
              marginLeft: "20%",
            }}
          />
        </div>

        <div className="col two" style={{ width: "50%", marginRight: "8%" }}>
          <form>
            <Grid>
              <Paper elevation={3} style={paperStyle}>
                <Grid align="center">
                  <TextField
                    style={textStyle}
                    size="small"
                    onChange={changeHandler}
                    name="firstName"
                    label="First Name"
                    placeholder="Enter First Name"
                    autoComplete="false"
                    required
                  />

                  <TextField
                    style={textStyle}
                    size="small"
                    onChange={changeHandler}
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter Last Name"
                    autoComplete="false"
                    required
                  />
                  <TextField
                    style={textStyle}
                    size="small"
                    onChange={changeHandler}
                    name="empCode"
                    label="Employee Code"
                    placeholder="Enter Employee Code"
                    helperText={
                      <div style={{ color: "red" }}>{message.empCode}</div>
                    }
                    autoComplete="false"
                    required
                  />
                  <TextField
                    style={textStyle}
                    size="small"
                    onChange={changeHandler}
                    name="phone"
                    label="Phone Number"
                    placeholder="Enter Phone Number"
                    helperText={
                      <div style={{ color: "red" }}>{message.phone}</div>
                    }
                    required
                  />
                  <TextField
                    style={textStyle}
                    size="small"
                    onChange={changeHandler}
                    name="email"
                    label="Company Email"
                    placeholder="Enter @incedoinc.com id"
                    helperText={
                      <div style={{ color: "red" }}>{message.email}</div>
                    }
                    autoComplete="false"
                    required
                  />

                  <TextField
                    style={textStyle}
                    size="small"
                    name="managerId"
                    onChange={changeHandler}
                    label="Manager Id"
                    type="text"
                    placeholder="Password"
                    helperText={
                      <div style={{ color: "red" }}>{message.managerId}</div>
                    }
                    autoComplete="false"
                    required
                  />

                  <TextField
                    style={textStyle}
                    size="small"
                    name="managerName"
                    onChange={changeHandler}
                    label="Manager Name"
                    type="text"
                    placeholder="Manager Name"
                    autoComplete="false"
                    required
                  />

                  <TextField
                    style={textStyle}
                    size="small"
                    name="managerEmail"
                    onChange={changeHandler}
                    label="Manager Email"
                    type="text"
                    placeholder="Manager Email"
                    helperText={
                      <div style={{ color: "red" }}>{message.managerEmail}</div>
                    }
                    autoComplete="false"
                    required
                  />

                  <TextField
                    style={textStyle}
                    size="small"
                    onChange={changeHandler}
                    name="projectid"
                    label="Project ID"
                    placeholder="Project ID"
                    helperText={
                      <div style={{ color: "red" }}>{message.projectId}</div>
                    }
                    autoComplete="false"
                    required
                  />

                  <TextField
                    style={textStyle}
                    size="small"
                    onChange={changeHandler}
                    name="projectName"
                    label="Project Name"
                    placeholder="Project Name"
                    autoComplete="false"
                    required
                  />

                  <TextField
                    style={textStyle}
                    size="small"
                    onChange={changeHandler}
                    name="department"
                    type="text"
                    label="Department"
                    placeholder="Department"
                    autoComplete="false"
                    required
                  />

                  <TextField
                    style={textStyle}
                    size="small"
                    onChange={changeHandler}
                    name="office"
                    type="text"
                    label="Office Address"
                    placeholder="Office"
                    autoComplete="false"
                    required
                  />

                  <TextField
                    sx={{ margin: "10px 20px", width: "86.8%" }}
                    size="small"
                    name="addressDetails"
                    onChange={changeHandler}
                    label="Address"
                    placeholder="Enter Address"
                    required
                  />

                  <Button
                    onClick={onSubmitHandler}
                    sx={{
                      marginLeft: "60%",
                      width: "20%",
                      backgroundColor: "#FF5733",
                      marginTop: "1%",
                      marginLeft: "67.5%",
                      maxHeight: 30,
                    }}
                    ref={form}
                    type="submit"
                    color="primary"
                    variant="contained"
                    size="small"
                  >
                    <h5 style={{ padding: "auto" }}>Create</h5>
                  </Button>
                </Grid>
              </Paper>
            </Grid>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;

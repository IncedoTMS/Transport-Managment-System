import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { borderRadius } from "@mui/system";
import axios from "axios";
import "./CreateAccount.scss";
import swal from "sweetalert";
import { Redirect } from "react-router-dom";

// import svg from './cab';

function CreateAccount() {


  var localData=JSON.parse(localStorage.getItem("loadedData"));
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
    addressDetails: "",
  });

  const [message, setMessage] = useState("");

  const changeHandler = (e) => {
    e.preventDefault();
    let key = e.target.name;
    let value = e.target.value;
    // console.log(key,value);
    setUserData({ ...userData, [key]: value });
    // console.log(userData);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(userData);
    axios
      .post("https://tms-incedo-demo.azurewebsites.net/api/v1/user", userData)
      .then((resp) => {
        console.log(resp);
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

  const emailValidation = (email) => {
    const emailValidator = /^([a-z\d\.\_])+@incedoinc.com/;
    if (!emailValidator.test(email) && email !== "") {
      setMessage("Email is Invalid");
      window.alert(message);
    } else {
      setMessage("");
    }
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
    {localData.roleId!=3?<Redirect to="/" /> :null}

      <div className="row" style={{ display: "flex", marginTop: "3%" }}>
        <div
          className="col one"
          style={{
            width: "50%",
            margin: "auto",
            height:"80%",
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
                {/* <Grid align="center">
          <Avatar style={avatarStyle} variant="square">
            <PersonAddOutlinedIcon sx={{ width: 30, height: 30 }} />
          </Avatar>

          <h4 style={{ color: "black" }}>Create New User</h4>
        </Grid> */}

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
                    required
                  />
                  <TextField
                    style={textStyle}
                    size="small"
                    onChange={changeHandler}
                    name="email"
                    label="Company Email"
                    placeholder="Enter @incedoinc.com id"
                    autoComplete="false"
                    required
                  />

                  <TextField
                    style={textStyle}
                    size="small"
                    name="password"
                    onChange={changeHandler}
                    label="Password"
                    type="password"
                    placeholder="Password"
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
                    name="manager"
                    type="text"
                    label="Manager Name"
                    placeholder="Manager Name"
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
                    sx={{ width: "86.8%", margin: "8px 20px" }}
                    size="small"
                    onChange={changeHandler}
                    name="office"
                    type="text"
                    label="Office"
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
                    type="submit"
                    color="primary"
                    variant="contained"
                    size="small"
                  >
                    <h5 style={{padding:"auto"}}>Create</h5>
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

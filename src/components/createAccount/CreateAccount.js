import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { borderRadius } from "@mui/system";
import axios from "axios";
// import svg from './cab';

function CreateAccount() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    empCode: "",
    email: "",
    password: "",
    roleId: 2,
  });

  const changeHandler = (e) => {
    e.preventDefault();
    let key = e.target.name;
    let value = e.target.value;
    // console.log(key,value);
    setUserData({ ...userData, [key]: value });
    // console.log(userData);
  };

  const onSubmitHandler = () => {
    console.log(userData);
    axios
      .post("https://localhost:44371/api/v1/user", userData)
      .then((resp) => {
        console.log(resp);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const paperStyle = {
    padding: 40,
    height: "auto",
    width: 700,
    margin: "150px auto",
  };
  const avatarStyle = { backgroundColor: "#1696d6", borderRadius: "50%" };
  const textStyle = { margin: "8px 20px", width: "40%" };
  return (

    <>


          <h4 style={{color: "rgb(180 36 36)", marginTop: "100px", marginBottom: "-126px",marginLeft: "10%", fontFamily: "Roboto"}}>Create New User</h4>


    <div className="row" style={{display: "flex"}}>

      <div className="col 1" style={{width: "50%", margin: "auto", float:"left"}}>
        <Paper elevation={1} >


<img src="cab.svg" style={{width: "50%", height: 500, borderRadius:"10%", backgroundColor:"#dfdfdf"}}/>
    </Paper>
      </div>

      <div className="col 2" style={{width: "50%", marginRight: "8%"}}>

   

    <Grid>
      <Paper elevation={1} style={paperStyle}>
        {/* <Grid align="center">
          <Avatar style={avatarStyle} variant="square">
            <PersonAddOutlinedIcon sx={{ width: 30, height: 30 }} />
          </Avatar>

          <h4 style={{ color: "black" }}>Create New User</h4>
        </Grid> */}

        <Grid align="center">
        <TextField
          style={textStyle}
          size="medium"
          onChange={changeHandler}
          name="firstName"
          label="First Name"
          placeholder="Enter First Name"
          required
        />
        <TextField
          style={textStyle}
          size="medium"
          onChange={changeHandler}
          name="lastName"
          label="Last Name"
          placeholder="Enter Last Name"
        />
        <TextField
          style={textStyle}
          size="medium"
          onChange={changeHandler}
          name="empCode"
          label="Employee Code"
          placeholder="Enter Employee Code"
          required
        />
        <TextField
          style={textStyle}
          size="medium"
          onChange={changeHandler}
          name="phone"
          label="Phone Number"
          placeholder="Enter Phone Number"
          required
        />
        <TextField
          style={textStyle}
          size="medium"
          onChange={changeHandler}
          name="email"
          label="Company Email"
          placeholder="Enter @incedoinc.com id"
          required
        />
        <TextField
          style={textStyle}
          size="medium"
          label="Personal Email"
          placeholder="Enter Email"
        />
        <TextField
          style={textStyle}
          size="medium"
          onChange={changeHandler}
          name="projectid"
          type="number"
          label="Project ID"
          placeholder="Project ID"
          required
        />
        <TextField
          style={textStyle}
          size="medium"
          onChange={changeHandler}
          name="manager"
          type="text"
          label="Manager Name"
          placeholder="Manager Name"
          required
        />
        <TextField
          sx={{ margin: "10px 20px", width: "86.5%" }}
          size="medium"
          label="Address Line 1"
          placeholder="Enter Address"
          required
        />
        <TextField
          sx={{ margin: "10px 20px", width: "86.5%" }}
          size="medium"
          label="Address Line 2"
          placeholder="Enter Address"
        />
        <Button
          onClick={onSubmitHandler}
          sx={{
            marginLeft: "60%",
            width: "30%",
            backgroundColor: "green",
            marginTop: "10px",
          }}
          type="submit"
          color="primary"
          variant="contained"
        >
          <h5>Create User</h5>
        </Button>
        </Grid>
      </Paper>
    </Grid>
    </div>

    </div>
    </>
  );
}

export default CreateAccount;

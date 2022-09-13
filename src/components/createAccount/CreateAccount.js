import React, {useState} from 'react';
import {Grid,Paper,Avatar, TextField, Button} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { borderRadius } from '@mui/system';
import axios from 'axios';



function CreateAccount() {
  const [userData, setUserData]=useState({
    firstName:"",
    lastName: "",
    phone: "",
    empCode: "",
    email: "",
    password: "",
    roleId:2

    
  })

  const changeHandler=(e)=>{
    e.preventDefault();
    let key= e.target.name;
    let value=e.target.value;
    // console.log(key,value);
    setUserData({...userData, [key]:value});
    // console.log(userData);
  }
  
  const onSubmitHandler=()=>{
    console.log(userData);
    axios.post("https://localhost:44371/api/v1/user", userData).then((resp)=>{
      console.log(resp)
    }).catch((e)=>{
      console.log(e);
    })
  }

  const paperStyle={padding: 20, height: '80vh', width: 500, margin:"150px auto", backgroundColor:"#e4eeef",}
  const avatarStyle={backgroundColor:"#1696d6", borderRadius:"50%"}
  const textStyle={margin:"8px 20px", width: "40%", }
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
        <Avatar style={avatarStyle} variant="square">
  <  PersonAddOutlinedIcon sx={{width: 30, height: 30}} />
</Avatar>


<h4 style={{color: "black"}}>Create New User</h4>


        </Grid>
        <TextField style={textStyle} size="small" onChange={changeHandler} name="firstName" label="First Name" placeholder='Enter First Name' required/>
        <TextField style={textStyle} size="small"  onChange={changeHandler} name="lastName" label="Last Name" placeholder='Enter Last Name' />
        <TextField style={textStyle} size="small"  onChange={changeHandler} name="empCode" label="Employee Code" placeholder='Enter Employee Code' required/>
        <TextField style={textStyle} size="small"  onChange={changeHandler} name="phone" label="Phone Number" placeholder='Enter Phone Number' required/>
        <TextField style={textStyle} size="small"  onChange={changeHandler} name="email"label="Company Email" placeholder='Enter @incedoinc.com id' required/>
        <TextField style={textStyle} size="small"  label="Personal Email" placeholder='Enter Email'/>
        <TextField style={textStyle} size="small"  onChange={changeHandler} name="password" type='password' label="password" placeholder='password' required/>
        <TextField style={textStyle} size="small"  onChange={changeHandler} name="password" type='password' label="password" placeholder='confirm password' required/>
        <TextField sx={{margin:"10px 20px", width: "89%"}} size="small" label="Address Line 1" placeholder='Enter Address' required/>
        <TextField sx={{margin:"10px 20px", width: "89%"}} size="small" label="Address Line 2" placeholder='Enter Address'/>
        <Button onClick={onSubmitHandler} sx={{margin:"10px 20px", width: "90%", backgroundColor:"purple"}}  type='submit' color='primary' variant="contained" fullWidth ><h5>Create User</h5></Button>

     

      </Paper>


    </Grid>
  )
}

export default CreateAccount;
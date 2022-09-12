import React from 'react';
import {Grid,Paper,Avatar, TextField, Button} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { borderRadius } from '@mui/system';

function CreateAccount() {

  const paperStyle={padding: 20, height: '100vh', width: 500, margin:"150px auto"}
  const avatarStyle={backgroundColor:"#1696d6", borderRadius:"50%"}
  const textStyle={margin:"10px 20px", width: "40%"}
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
        <Avatar style={avatarStyle} variant="square">
  <  PersonAddOutlinedIcon sx={{width: 30, height: 30}} />
</Avatar>



<h4 style={{color: "black"}}>Create New User</h4>


        </Grid>
        <TextField style={textStyle} label="First Name" placeholder='Enter Last Name'/>
        <TextField style={textStyle} label="Last Name" placeholder='Enter Last Name'/>
        <TextField style={textStyle} label="Employee Code" placeholder='Enter Employee Code'/>
        <TextField style={textStyle} label="Phone Number" placeholder='Enter Phone Number'/>
        <TextField style={textStyle} label="Company Email" placeholder='Enter @incedoinc.com id'/>
        <TextField style={textStyle} label="Personal Email" placeholder='Enter Email'/>
        <TextField style={textStyle} type='password' label="password" placeholder='password'/>
        <TextField style={textStyle} type='password' label="password" placeholder='confirm password'/>
        <TextField sx={{margin:"10px 20px", width: "89%"}} label="Address Line 1" placeholder='Enter Address'/>
        <TextField sx={{margin:"10px 20px", width: "89%"}} label="Address Line 2" placeholder='Enter Address'/>
        <Button sx={{margin:"10px 20px", width: "90%", backgroundColor:"purple"}}  type='submit' color='primary' variant="contained" fullWidth ><h5>Create User</h5></Button>

     

      </Paper>


    </Grid>
  )
}

export default CreateAccount;
import React from 'react';
import './Forms.css'

export default function Forms() {
  return (
<div>
<form action='./' method='get'>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First Name" name="fname" required/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last Name" name="Lname" />
    </div>
</div>


<div class="row">
    <div class="col">
      <input type="email" class="form-control" placeholder="Email Address" name="emailid" required/>
    </div>
    <div class="col">
      <input type="digit" class="form-control" placeholder="Phone number" name="Phno" />
    </div>
</div>

<div class="row">
    <div class="col">
      <input type="password" class="form-control" placeholder="Password" name="pswd" required/>
    </div>
    <div class="col">
      <input type="password" class="form-control" placeholder="confirm password" name="pswd" required/>
    </div>
</div>

<div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Address Line 1" name="address" required/>
    </div>
</div>
<div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Address line 2" name="address2" />
    </div>
    <div class="col">
      <input type="number" class="form-control" placeholder="Pin Code" name="Phno" />
    </div>
</div>
<button type="submit" class="btn btn-primary btn-lg">Register</button>
</form>



</div>
  )
}

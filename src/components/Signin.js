import React from 'react';
import './Signin.css';

export default function Signin() {
  return (
    <>

    

<div class="row">
  <div class="column one">
    <h2>img</h2>
  </div>
  <div class="column two">
  <form class="formbox">

    <div class="welcome">
    <h1><sub>i</sub>Hello</h1>
    <p>please provide few details to get started</p>
    </div>

  <div class="mb-3">
    <label class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
  </div>
  <div class="mb-3">
    <label class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password'/>
  </div>
<div></div>
  <button type="submit" class="btn btn-primary rounded-pill">Continue</button>
</form>
  </div>
</div>
    </>
  )
}

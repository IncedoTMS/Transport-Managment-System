import React from 'react';
import './Signin.css';

export default function Signin() {
  return (
    <>

    

<div class="row">
  <div class="column one">
    <h2>Column 1</h2>
    <p>Some text..</p>
  </div>
  <div class="column two">
  
  <form class="formbox">

    <div class="welcome">
    <h1><sub>i</sub>Hello</h1>
    <p>please provide few details to get started</p>
    </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>


  </div>
</div>


    




    
    </>
  )
}

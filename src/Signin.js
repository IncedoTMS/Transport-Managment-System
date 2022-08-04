import React from 'react';
import './Signin.css';

export default function Signin() {
  return (
    <>
      <div class="row">
        <div class="column one col-sm">
          <h2>Image Here</h2>
        </div>
        <div class="column two col-sm">
          <div class="formbox">
            
            <div class="welcome d-flex justify-content-around">
              <h3>Sign In</h3>
              <p class='register-link'>New to Transportation Hub? <a href="#">Register</a></p>
            </div>
            
            <form>
              <div class="form-content">
                <div class="mb-3">
                  <label class="form-label">Email address</label>
                  <input type="email" class="form-control"  aria-describedby="emailHelp" placeholder='example@gmail.com' />
                </div>
                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <input type="password" class="form-control" placeholder='Password' />
                </div>
              </div>
            </form>
            
            <div class='d-flex justify-content-end forget-password'>
              <a href='#'>Forget Password</a>
            </div>

            <div class='d-flex justify-content-center'>
              <button type="submit" class="btn btn-primary signin-button">Sign-In</button>
            </div> 
          </div>
        </div>
      </div>
    </>
  )
}

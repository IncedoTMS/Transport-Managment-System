
import React from "react";
import { Helmet } from "react-helmet"; //React Helmet use to Dynamically set what's in the document's head section.
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import './Signup.scss' ;

export default function Signup() {
  const History = useHistory();
  const routeToSignin = () => {
    History.push("/");

  };


  return (

    <div class="pageOne">
      <Helmet>
        <title>Incedo-TMS-Register</title>
        {/*Changes the Title bar of the current page to-Incedo-TMS-Register */}
      </Helmet>
      <div>
        <div className='row'>
          <div className='column'>
            <img src="img.jpg"/>
          </div>
          <div className='two' >
            <div className='formbox'>
              <div className='headings'>
                <h4 className='left'>Create Account</h4>
              </div>
              <div className='myForm'>



                <div>

                  <form action='./' method='get'>
                    <div class="row">
                      <div class="col">
                        <input type="text" class="form-control" placeholder="First Name" name="fname" required />
                      </div>
                      <div class="col">
                        <input type="text" class="form-control" placeholder="Last Name" name="Lname" />
                      </div>
                    </div>


                    <div class="row">
                      <div class="col">
                        <input type="email" class="form-control" placeholder="Email Address" name="emailid" required />
                      </div>
                      <div class="col">
                        <input type="digit" class="form-control" placeholder="Phone number" name="Phno" />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <input type="password" class="form-control" placeholder="Password" name="pswd" required />
                      </div>
                      <div class="col">
                        <input type="password" class="form-control" placeholder="confirm password" name="pswd" required />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <input type="text" class="form-control add1" placeholder="Address Line 1" name="address" required />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <input type="text" class="form-control" placeholder="Address line 2" name="address2" />
                      </div>
                      <div class="col">
                        <input type="text" class="form-control" placeholder="Pin Code" name="Phno" />
                      </div>
                    </div>

                    <button type="submit" class="btn btn-primary btn-lg">Register</button>
                    <p className='para'>Have an account? <a onClick={routeToSignin} style={{ color: 'blue' }}>Log In</a></p>

                  </form>

                </div>



              </div>
            </div>

          </div>
        </div>


      </div>


    </div>
  );

}

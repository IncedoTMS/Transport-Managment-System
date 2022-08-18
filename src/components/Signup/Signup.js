import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet"; //React Helmet use to Dynamically set what's in the document's head section.
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import './Signup.css' ;

export default function Signup() {
  const History = useHistory();
  const routeToSignin = () => {
    History.push('/');
  };
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phnno: "",
    password: "",
    conpassword: "",
    add1: "",
    add2: "",
    pin: ""
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^([a-z\d\.\_])+@incedoinc.com/; // for email
    const regex1 = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/; // for name
    const regex2 = /^[A-Z]{1}[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const pass_regex  = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,20}$/;
    const PHONE_REGEX = /^(\+\d{1,3}[- ]?)?\d{10}$/; //for phone no
    const pin_regex = /^[1-9]{1}[0-9]{5}/;
    if (!regex2.test(values.firstname)) {
      errors.firstname = "First letter must be capital";
    }
    if (!regex2.test(values.lastname)) {
      errors.lastname = "First letter must be capital";
    }
    if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    if (!PHONE_REGEX.test(values.phnno)) {
      errors.phnno = "Phone number is not valid";
    }
    
    if (!pass_regex.test(values.password)) {
      errors.password = "Password is not valid";
    }
    if (!pass_regex.test(values.conpassword)) {
      errors.conpassword = "Password is not valid";
    }
    if (values.password != values.conpassword) {
      errors.conpassword = "Password and Confirm Password does not match";
    }
    if ((values.add1).length < 60) {
      errors.add1 = "Address length must exceed 60 characters";
    }
    if (!pin_regex.test(values.pin)) {
      errors.pin = "Pin code is not valid";
    }
    return errors;
  };
  return (
  <>
    <div className="pageOne">
      </div>
    <div>
      <div className="row">
        <div className="column one">
          <img src='./img.jpg' />
        </div>
        <div className="column two" >
          <div className='formbox'>
            <div className='headings'>
              <h4 className='left'>Create Account</h4>
            </div>
            <div className='myForm'>
              {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className="ui message success">Signed in successfully</div>) : (
              <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
              )} */}
              <div>
                <form action='./' method='get' onSubmit={handleSubmit}>
                  <div class="row">
                    <div class="col">
                      <input type="text" class="form-control" placeholder="First Name" name="firstname" 
                      value={formValues.firstname} onChange={handleChange} required />
                      <p>{formErrors.firstname}</p>
                    
                    </div>
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Last Name" name="lastname" 
                      value={formValues.lastname}
                      onChange={handleChange}/>
                      <p>{formErrors.lastname}</p>
                    </div>
                    
                  </div>
                  <div class="row">
                    <div class="col">
                      <input type="email" class="form-control" placeholder="Email Address" name="email" 
                      value={formValues.email}
                      onChange={handleChange} required />
                      <p>{formErrors.email}</p>
                    </div>
                    
                    <div class="col">
                      <input type="digit" class="form-control" placeholder="Phone number" name="phnno" 
                      value={formValues.phnno}
                      onChange={handleChange}/>
                      <p>{formErrors.phnno}</p>
                    </div>
                    
                  </div>
                  <div class="row">
                    <div class="col">
                      <input type="password" class="form-control" placeholder="Password" name="password" 
                      value={formValues.password}
                      onChange={handleChange} required />
                      <p>{formErrors.password}</p>
                    </div>
                    
                    <div class="col">
                      <input type="password" class="form-control" placeholder="confirm password" name="conpassword" 
                      value={formValues.conpassword}
                      onChange={handleChange} required />
                      <p>{formErrors.conpassword}</p>
                    </div>
                    
                  </div>
                  
                  <div class="row">
                    <div class="col">
                      <input type="text" class="form-control add1" placeholder="Address Line 1" name="add1" 
                      value={formValues.add1}
                      onChange={handleChange} required />
                       <p>{formErrors.add1}</p>
                    </div>
                   
                  </div>
                  
                  <div class="row">
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Address line 2" name="add2" 
                      value={formValues.add2}
                      onChange={handleChange} />
                      <p>{formErrors.add2}</p>
                    </div>
                    
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Pin Code" name="pin" 
                      value={formValues.pin}
                      onChange={handleChange} />
                      <p>{formErrors.pin}</p>
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
    </>
  )
}
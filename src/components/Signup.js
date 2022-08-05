import React from 'react';
import { useHistory } from "react-router-dom";
import './Signup.css';
import Forms from './Register/forms/Forms';

export default function Signup() {

  
  return (
    <div>
    <div className="row">
      <div className="column one">
       <img src='./img.jpg'/>
      </div>
      <div className="column two" >
        <div className='formbox'>
            <div className='headings'>
            <h4 className='left'>Create Account</h4>
            </div>
            <div className='myForm'>
            <Forms />
            </div>
        </div>
        
      </div>
    </div>
      

    </div>
  )
}

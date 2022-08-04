import React from 'react';
import './Signup.css';
import Forms from './forms/Forms';

export default function Signup() {
    return (
        <>
    
    <div className="row">
      <div className="column one">
       
      </div>
      <div className="column two">
        <div className='formbox'>
            <div className='headings'>
            <h4 className='left'>Create Account</h4>
            <p className='para'>Already have an account? <div style={{color:'blue'}}>Sign in</div></p>
            </div>
            <div className='myForm'>
            <Forms />
            </div>
        </div>
        
      </div>
    </div>
    
    </>

      );
}

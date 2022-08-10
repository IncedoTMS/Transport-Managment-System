import React, {useState} from 'react';
const axios = require('axios');




export default function Post() {


    const [user, setUser]=useState({
      "Sno":"",
      "month":"",
      "empid":"",
      "empName":"",
     
});




function submitHandler(){

	axios.post(" http://localhost:3000/users",user).then(
		(resp)=>{
			console.log(resp)
		},
		(e)=>{
			console.log(e);
		}
	);

}

  return (
    <form on  onSubmit={submitHandler}>
			<input
				type='text'
				name='Sno'
				value={user.Sno}
				placeholder='Name'
				onChange={(e)=>{
					// console.log(e.target.value);
					setUser({...user,[e.target.name]:e.target.value });
				
				}}
				
			/>
			<input
				type='text'
				name='month'
				value={user.month}
				placeholder='Email'
				onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value })}}
				
			/>
			<input
				type='text'
				name='empid'
				value={user.empid}
				placeholder='Phone (10)'
				onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value })}}
				
			/>
			<button>Submit Contact</button>
		
		</form>
  );
}

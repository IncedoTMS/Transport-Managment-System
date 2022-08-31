import React, { useState,useEffect } from 'react';
import './Admin.css';
import axios from 'axios';
import tableDataMethod  from './get_tableData';
import TableDisplay from './CreateTable';
import AdhocDataMethod from './GetAdhoc';
import AdhocTable from './CreateAdhoc';
import EnhancedTable from './EnhancedTable';





export default function Admin() {
    // Added State to wait for JSON API
    const [tableDataState, setTableDataState] = useState([]);
    const [adhocDataState, setAdhocState] = useState([]);
    // const [searchData, setSearchData] = useState([]);

    const [temp, setTemp] = useState([]);
    const [input, setInput] = useState("");
    const [cred, setCred]= useState({
        userName:"",
        password:""
    })

    const [isTrue, setIsTrue]=useState(false);

    useEffect(()=>{
      const tableData = [];
      axios.get('http://localhost:3000/monthly')
        .then(resp => {
            // const [oneTime, setOneTime] = useState(2)
            const data = resp.data;
            data.forEach(e => {
                tableData.push(e);

                // console.log(`${e.id}, ${e.name}, ${e.status}`);
            });
            // Once API call is complete and array is not empty,
            // setter sets the state and sends tableData to Admin.js
            setTableDataState(tableData)
            // oneTime = !oneTime
        })
        .catch(error => {
            console.log(error);
        });
    },[]);
    useEffect(()=>{AdhocDataMethod(setAdhocState)},[]);

    // Calling tableDataMethod to set state
    useEffect(()=>{ 
        console.log(input);
    },[input]);
   ;

    const handleSearch = (e) => {
        // console.log('Entered Search Function');
        setInput(e.target.value);
        let targ = e.target.value.toLowerCase();
        let temp_arr = tableDataState;
        var f_arr = temp_arr.filter((el, i) => {
          // console.log(el);
          return el.id == targ || el.name.toLowerCase().includes(targ);
        });
        // console.log(f_arr
            setTemp(f_arr);
        
      };



      function AdhocRequest(){

        return (
          <>
              <div class='container' style={{marginBottom:"2.5%"}}>
                  <div className='d-flex justify-content-between'>
                      <h2 className='admin-header'>Adhoc Request</h2> 
                      <input className='fontAwesome searchBar' onChange={handleSearch} value={input} placeholder="&#xF002; Search Name or Emp ID"/>
                  </div>
                  {/* {console.log(tableDataMethod, "tester")} */}
                  {/* Checks if the length of the JSON array is not 0. 
                  If 0 Display nothing, else display table */}
                  {adhocDataState.length === 0 ? <></> : <AdhocTable tableData={adhocDataState} searchData={temp} />}
  
              </div>
          </>
      )
  

      }


      function MonthlyRequest(){
        return (
            <>
                <div class='container' style={{marginBottom:"2.5%", marginTop:"2.5%"}}>
                    <div className='d-flex justify-content-between'>
                        <h2 className='admin-header'>Monthly Requests</h2> 
                        <input className='fontAwesome searchBar' onChange={handleSearch} value={input} placeholder="&#xF002; Search Name or Emp ID"/>
                    </div>
                    {console.log(tableDataMethod, "tester")}
                    {/* Checks if the length of the JSON array is not 0. 
                    If 0 Display nothing, else display table */}
                    {tableDataState.length === 0 ? <></> : <TableDisplay tableData={tableDataState} searchData={temp} />}
    
                </div>
            </>
        )
    
    }

    function MaterialTable(){

        return (
            <>
                <div class='container' style={{marginBottom:"2.5%", marginTop:"2.5%"}}>
                    <div className='d-flex justify-content-between'>
                        <h2 className='admin-header'>Monthly Requests</h2> 
                        <input className='fontAwesome searchBar' onChange={handleSearch} value={input} placeholder="&#xF002; Search Name or Emp ID"/>
                    </div>
                    {console.log(tableDataMethod, "tester")}
                    {/* Checks if the length of the JSON array is not 0. 
                    If 0 Display nothing, else display table */}
                    {tableDataState.length === 0 ? <></> : <EnhancedTable tableData={tableDataState} searchData={temp} />}
    
                </div>
            </>
        )

    }

    function changeHandler(e){

        setCred({...cred, [e.target.name]:e.target.value});
        console.log(cred);
            
    }

    function submitHandler(e){
        e.preventDefault();
        (cred.userName=="admin" && cred.password=="admin")?  setIsTrue(true):setIsTrue(false);

      }


    

    return(
         !isTrue? ( <form style={{marginLeft:"30%", marginRight: "30%", marginTop: "10%", marginBottom: "20%"}}>
            <div class="mb-3">
              <h1>Admin Login</h1>
              <label for="exampleInputEmail1" class="form-label">Username</label>
              <input type="text" name="userName" value={cred.userName} onChange={changeHandler} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  autoComplete='false'/>
          
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" value={cred.password}  name="password" onChange={changeHandler}class="form-control" id="exampleInputPassword1" autoComplete='false'/>
            </div>
    
            <button type="submit" onClick={submitHandler} class="btn btn-primary">Submit</button>
          </form>

):(<> 

<div>
<hr /><hr />
<MaterialTable />
<AdhocRequest />
<hr /><hr />
</div>
</>)
        
    )
 


    
}
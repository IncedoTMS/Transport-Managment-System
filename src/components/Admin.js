import React, { useState,useEffect } from 'react';
import './Admin.css';
import tableDataMethod  from './get_tableData';
import Table from './CreateTable';


export default function Admin() {
    // Added State to wait for JSON API
    const [tableDataState, setTableDataState] = useState([]);
    // const [searchData, setSearchData] = useState([]);

    const [temp, setTemp] = useState([]);
    const [input, setInput] = useState("");

    useEffect(()=>{tableDataMethod(setTableDataState)},[])

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

    

    return (
        <>
            <div class='container'>
                <div className='d-flex justify-content-between'>
                    <h2 className='admin-header'>Admin Dashboard</h2> 
                    <input className='fontAwesome searchBar' onChange={handleSearch} value={input} placeholder="&#xF002; Search Name or Emp ID"/>
                </div>
                {console.log(tableDataMethod, "tester")}
                {/* Checks if the length of the JSON array is not 0. 
                If 0 Display nothing, else display table */}
                {tableDataState.length === 0 ? <></> : <Table tableData={tableDataState} searchData={temp} />}

            </div>
        </>
    )
}
import React, { useState,useEffect } from 'react';
import './Admin.css';
import axios from 'axios';
import tableDataMethod  from './get_tableData';
import TableDisplay from './CreateTable';
import AdhocDataMethod from './GetAdhoc';
import AdhocTable from './CreateAdhoc';
import EnhancedTable from './EnhancedTable';
// import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
//   export default function BasicTabs() {
//     const [value, setValue] = React.useState(0);
  
//     const handleChange = (event, newValue) => {
//       setValue(newValue);
//     };









export default function Admin() {
    // Added State to wait for JSON API
    const [tableDataState, setTableDataState] = useState([]);
    const [adhocDataState, setAdhocState] = useState([]);
    // const [searchData, setSearchData] = useState([]);
    const [value, setValue] = useState(0);

    const [temp, setTemp] = useState([]);
    const [input, setInput] = useState("");
    const [cred, setCred]= useState({
        userName:"",
        password:""
    })

    const [adhocTemp, setAdhocTemp]=useState([]);

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
        let f_arr = temp_arr.filter((el) => {
        
            return el.id===targ || el.empName.toLowerCase().includes(targ) || el.month.toLowerCase().includes(targ);
            
        
        });
        // console.log(f_arr);
            setTemp(f_arr);
        
      };

      const handleSearch2 = (e) => {
        // console.log('Entered Search Function');
        setInput(e.target.value);
        let targ = e.target.value.toLowerCase();
        let temp_arr = adhocDataState;
        let f_arr = temp_arr.filter((el) => {
            // console.log(el.managerApproval);
          return el.id===targ || el.empName.toLowerCase().includes(targ)  || el.date.toLowerCase().includes(targ);
            
        
        });
        console.log(f_arr);
            setAdhocTemp(f_arr)
            console.log(adhocTemp);
        
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

      const handleChange = (event, newValue) => {
        setValue(newValue);
      }


    

    return(


        <>

        <hr /><hr /><hr />

        <Box sx={{ width: '100%'}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  variant="fullWidth" TabIndicatorProps={{style: {background:'orange'}}}>
            <Tab label={<h5 className='admin-header'>Monthly Requests</h5>} {...a11yProps(0)} />
            <Tab label={<h5 className='admin-header'>Adhoc Requests</h5> } {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>

        <div class='container' style={{marginBottom:"2.5%", marginTop:"2.5%"}}>
                    <div className='d-flex justify-content-between'>
                       
                        <input className='fontAwesome searchBar' onChange={handleSearch} value={input} placeholder="&#xF002; Search Name or Month"/>
                    
                    </div>
                    {console.log(tableDataMethod, "tester")}
                    
                    {tableDataState.length === 0 ? <></> : <EnhancedTable tableData={tableDataState} searchData={temp} />}
    
                </div>

        </TabPanel>
        <TabPanel value={value} index={1}>
        <>
              <div class='container' style={{marginBottom:"2.5%"}}>
                  <div className='d-flex justify-content-between'>
        
                      <input className='fontAwesome searchBar' onChange={handleSearch2} value={input} placeholder="&#xF002; Search Name or Date"/>
                     
                  </div>
                 
                  {adhocDataState.length === 0 ? <></> : <AdhocTable tableData={adhocDataState} searchData={adhocTemp} />}
  
              </div>
          </>
        </TabPanel>
      </Box>

      <hr /><hr /><hr /><hr />

      </>



/* <> */
/* <div> */
/* <hr /><hr /> */


/* <div class='container' style={{marginBottom:"2.5%", marginTop:"2.5%"}}> */
                    // <div className='d-flex justify-content-between'>
                        // <h2 className='admin-header'>Monthly Requests</h2> 
                        // <input className='fontAwesome searchBar' onChange={handleSearch} value={input} placeholder="&#xF002; Search Name or Emp ID"/>
                    // </div>
                    // {console.log(tableDataMethod, "tester")}
                    /* Checks if the length of the JSON array is not 0. 
                    If 0 Display nothing, else display table */
                    // {tableDataState.length === 0 ? <></> : <EnhancedTable tableData={tableDataState} searchData={temp} />}
    
// </div>
                // <hr /><hr />

                //  <div class='container' style={{marginBottom:"2.5%"}}>
                //   <div className='d-flex justify-content-between'>
                    //   <h2 className='admin-header'>Adhoc Request</h2> 
                    //   <input className='fontAwesome searchBar' onChange={handleSearch2} value={input} placeholder="&#xF002; Search Name or Emp ID"/>
                //   </div>
                //   {console.log(tableDataMethod, "tester")}
                  /* Checks if the length of the JSON array is not 0. 
                  If 0 Display nothing, else display table */
                //   {adhocDataState.length === 0 ? <></> : <AdhocTable tableData={adhocDataState} searchData={temp} />}
  
            //   </div>    


/* <hr /><hr /> */
// </div>
// </>
        
    
 


    
    )
}
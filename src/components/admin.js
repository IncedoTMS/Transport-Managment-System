import React, { useState } from "react";
import {BrowserRouter , Routes ,Route, Switch} from 'react-router-dom'
// import './Admin.css';
import tableDataMethod from "./get_tableData";
import Table from "./CreateTable";
import Post from "./Post";
import "./Admin.css";
import Monthly from "./Monthly.js";
import Edit from "./Edit";
// import Data from './data';

export default function Admin() {
  // Added State to wait for JSON API
  const [tableDataState, setTableDataState] = useState([]);
  // Calling tableDataMethod to set state
  tableDataMethod(setTableDataState);
  return (
    <>
      <BrowserRouter>
      <Switch>
      <div class="container">
        <h4>User Dashboard Page</h4>
        <h5 className="emp-details">Employee Details</h5>
        {console.log(tableDataMethod, "tester")}
        {/* Checks if the length of the JSON array is not 0. 
                If 0 Display nothing, else display table */}
        <Post />
        <Monthly />
        {/* {tableDataState.length === 0 ? (
          <></>
        ) : (
          <Table tableData={tableDataState} />
        )} */}
      </div>
        {/* <Route path="/monthly/edit" component={Edit}></Route> */}
      </Switch>
      
      
      </BrowserRouter>
    </>
  );
}

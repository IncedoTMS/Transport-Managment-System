import React, { useState } from "react";
import {BrowserRouter , Routes ,Route, Switch} from 'react-router-dom'
// import './Admin.css';
import tableDataMethod from "./get_tableData";
import Table from "./CreateTable";
import Post from "./UserMaster/Post.js";
import "./Admin.css";
import Monthly from "./Monthly/Monthly.js";
import Edit from "./Edit/Edit";
import Adhoc from "./Adhoc/Adhoc";
// import Data from './data';

export default function Admin() {
  // Added State to wait for JSON API
  const [tableDataState, setTableDataState] = useState([]);
  // Calling tableDataMethod to set state
  tableDataMethod(setTableDataState);
  return (
    // <>
    //   <BrowserRouter>
    //   <Switch>
      
    //   <div class="container">
        // <h4>User Dashboard Page</h4>
        // <h5 className="emp-details">Employee Details</h5>
    //     {console.log(tableDataMethod, "tester")}
    //     Checks if the length of the JSON array is not 0. 
    //             If 0 Display nothing, else display table
    //     <Post />
    //     <Monthly />
    //     {tableDataState.length === 0 ? (
    //       <></>
    //     ) : (
    //       <Table tableData={tableDataState} />
    //     )}
      
      
    //     <Route path="/monthly/edit" component={Edit}></Route>
    //     </div>
    //   </Switch>
      
      
      
    //   </BrowserRouter>
    // </>
    <BrowserRouter>
      <div>
        <Post />
        
        <Switch>
        <Route exact path="/" component={Monthly}><Monthly /></Route>
        <Route exact path="/monthly/edit/:id" component={Edit}></Route>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

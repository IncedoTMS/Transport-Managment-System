import React, { useState } from 'react';
// import './Admin.css';
import tableDataMethod  from './get_tableData';
import Table from './CreateTable';
import Post from './Post';
// import Data from './data';

export default function Admin() {
    // Added State to wait for JSON API
    const [tableDataState, setTableDataState] = useState([]);
    // Calling tableDataMethod to set state
    tableDataMethod(setTableDataState);
    return (
        <>
            <div class='container'>
                <h4>Admin Page</h4>
                {console.log(tableDataMethod, "tester")}
                {/* Checks if the length of the JSON array is not 0. 
                If 0 Display nothing, else display table */}
                <Post />
                {tableDataState.length === 0 ? <></> : <Table tableData={tableDataState} />}

            </div>
        </>
    )
}
import React, { useState } from 'react';
import './Admin.css';
import tableDataMethod  from './get_tableData';
import Table from './CreateTable';


export default function Admin() {
    // Added State to wait for JSON API
    const [tableDataState, setTableDataState] = useState([]);
    // Calling tableDataMethod to set state
    tableDataMethod(setTableDataState);
    return (
        <>
            <div class='container'>
                <h2>Admin Dashboard</h2>
                {console.log(tableDataMethod, "tester")}
                {/* Checks if the length of the JSON array is not 0. 
                If 0 Display nothing, else display table */}
                {tableDataState.length === 0 ? <></> : <Table tableData={tableDataState} />}

            </div>
        </>
    )
}
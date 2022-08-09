import React from 'react';
import './Admin.css';
import { tableData } from './get_tableData';
import Table from './CreateTable';


export default function Admin() {
  return (
    <>
        <div class='container'>
            <h4>Admin Page</h4>
            <Table tableData={tableData}/>
            
            {/* <table class="table table-striped table-bordered">
                <thead class="custom-header">
                    <tr>
                        <th scope="col">User ID</th>
                        <th scope="col">Emp ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Role</th>
                        <th scope="col">Request Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Confirm</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                        <td class='user-id'>0001</td>
                        <td class='emp-id'>607000</td>
                        <td class='emp-name'>Abbas Savliwala</td>
                        <td class='role'>
                            <select>
                                <option>User</option>
                                <option>Transport Team</option>
                                <option>Developer</option>
                                <option>Admin</option>
                            </select>
                        </td>
                        <td class='req-date'>08-08-2022</td>
                        <td class='status'>
                            <select>
                                <option>Active</option>
                                <option>Inactive</option>
                                <option>Requested</option>
                            </select>
                        </td>
                        <td class='confirm'><button class='btn btn-success'>Confirm</button></td>
                        <td class='edit'><button class='btn btn-info'>Edit</button></td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    </>
  )
}
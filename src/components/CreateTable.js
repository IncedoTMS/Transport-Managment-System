import React from "react"
import './Admin.css';

export default function Table ({ tableData }) {

	const Row = ({ tableData }) => {
		return (
			<tr>  
				<td class='user-id'>{tableData.id}</td>
                <td class='emp-id'>{tableData.empid}</td>
                <td class='emp-name'>{tableData.name}</td>
                <td class='role'>{tableData.role}</td>
                <td class='req-date'>{tableData.reqdate}</td>
                <td class='status'>{tableData.status}</td>
				<td class='confirm-button'><button disabled={tableData.status == "Active" ? true : tableData.status == "Inactive" ? true : false} class='btn btn-success'>Confirm</button></td>
                <td class='edit'><button class='btn btn-info'>Edit</button></td>
		
			</tr>
		)
	}

	return (
		// <div className='table'>
			<table class="table table-striped table-bordered">
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
                    {tableData && tableData.map(t => <Row tableData={t} key={t.id} />)}
                </tbody>
            </table>
			// { <div className='rows'>
			// 	{users && users.map(u => <Row user={u} key={u.id} />)}
			// </div> }
		// </div>
	)
}
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useHistory, useParams } from "react-router-dom";

// const Edit = () => {
//   let history = useHistory();
//   const { id } = useParams();
//   const [user, setUser] = useState({
//     month: "",
//     empId: "",
//     empName: "",
//     mobNo: "",
//     department: "",
//     projectId: "",
//     projectName: "",
//     manager: "",
//     pickupLocation: "",
//     pickupTime: "",
//     dropLocation: "",
//     managerApproval: "",
//     status: "",
//   });

//   const {
//     month,
//     empId,
//     empName,
//     mobNo,
//     department,
//     projectId,
//     projectName,
//     manager,
//     pickupLocation,
//     pickupTime,
//     dropLocation,
//     managerApproval,
//     status,
//   } = user;
//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.put(`http://localhost:3000/monthly/${id}`, user);
//     history.push("/");
//   };

//   const loadUser = async () => {
//     const result = await axios.get(`http://localhost:3000/monthly/${id}`);
//     setUser(result.data);
//   };
//   return (
//     <div className="container">
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Edit A User</h2>
//         <form onSubmit={(e) => onSubmit(e)}>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Name"
//               name="month"
//               value={month}
//               onChange={(e) => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Username"
//               name="username"
//               value={username}
//               onChange={(e) => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               className="form-control form-control-lg"
//               placeholder="Enter Your E-mail Address"
//               name="email"
//               value={email}
//               onChange={(e) => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Phone Number"
//               name="phone"
//               value={phone}
//               onChange={(e) => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Website Name"
//               name="website"
//               value={website}
//               onChange={(e) => onInputChange(e)}
//             />
//           </div>
//           <button className="btn btn-warning btn-block">Update User</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Edit;
import React from 'react'

const Edit = () => {
  return (
    <div>Edit</div>
  )
}

export default Edit
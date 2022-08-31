import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Demo_Adhoc from "./demo_adhoc";

const Adhoc = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3000/adhoc");
    setUser(result.data);
  };

  return (
    <>
      <Demo_Adhoc data={users} />

      <div className="add">
        <Link class="btn btn-primary mr-2" to={"/dashboard/monthly/addadhoc"}>
          <div style={{ color: "white" }}>Add Adhoc Request</div>
        </Link>
      </div>
    </>
  );
};

export default Adhoc;

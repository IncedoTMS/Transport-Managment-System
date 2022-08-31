import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
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
        <Link to={"/dashboard/monthly/addadhoc"}>
          <Button variant="contained" startIcon={<AddIcon fontSize="large" />}>
            Add New Request
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Adhoc;

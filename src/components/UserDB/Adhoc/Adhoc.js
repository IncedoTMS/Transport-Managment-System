import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Demo_Adhoc from "./demo_adhoc";

const Adhoc = ({ userId }) => {
  const [cabs, setCabs] = useState([]);

  const loadCabs = async () => {
    try {
      const res = await axios.get(
        "https://localhost:44371/api/v1/cabrequirment/(id,userid,roleid)",
        {
          params: {
            UserID: userId,
          },
        }
      );
      setCabs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadCabs();
  }, []);

  const filteredCabs = cabs.filter((cab) =>  cab.isAdhoc===true )
  console.log(filteredCabs);
  return (
    <>
      
      <Demo_Adhoc data={filteredCabs} />

      <div style={{ textAlign: "center" }}>
        <Link to={`/dashboard/adhoc/addadhoc/${userId}`}>
          <Button variant="contained" startIcon={<AddIcon fontSize="large" />}>
            Add New Request
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Adhoc;

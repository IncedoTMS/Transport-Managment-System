import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Demo from "./demo";

const Monthly = ({ userId }) => {
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

  return <Demo data={cabs} />;
};

export default Monthly;

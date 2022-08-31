import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Demo from "./demo";

const Monthly = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3000/monthly");
    setUser(result.data);
  };

  return <Demo data={users} />;
};

export default Monthly;

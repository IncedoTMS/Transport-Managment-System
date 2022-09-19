import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Post from "./UserMaster/Post.js";
import Edit from "./Edit/EditMonthly";
import Edit2 from "./Edit/EditAdhoc";
import AddAdhoc from "./NewRequest/AddAdhoc.js";
import "./UserDB.css";
import Tabs from "./Tabs";
import { userData } from "./../Signin/Signin";
import axios from "axios";

export default function UserDB() {
  const token = localStorage.getItem("token");
  const loadedData = JSON.parse(localStorage.getItem("loadedData"));
  let loggedIn = true;
  if (token == null) {
    loggedIn = false;
  }


  var localData=JSON.parse(localStorage.getItem("loadedData"));
  console.log(localData.roleId);

  const [user, setUser] = useState([]);
  const [userId, setUserId] = useState();
  // const [cabs, setCabs] = useState([]);

  useEffect(() => {
    loadUserDetails();
    // if (user && userId) {
    //   loadCabDetails();
    // }
  }, []);

  const loadUserDetails = async () => {
    try {
      const res = await axios.get(
        "https://tms-incedo-demo.azurewebsites.net/api/v1/user/(empcode,name,email)",
        {
          params: {
            EmpCode: loadedData.empCode,
          },
        }
      );
      if (res.data) {
        res.data.map((u) => {
          setUser(u);
          setUserId(u.id);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {localData.roleId!=2? <Redirect to="/" /> : null}
      <BrowserRouter>
        <div className="db-body">
          {/* <Post userData={userData} /> */}
          {user && userId ? <Post user={user} /> : null}

          <Switch>
            <Route exact path="/dashboard">
              {user && userId ? <Tabs userId={userId} /> : null}
            </Route>
            <Route
              exact
              path="/dashboard/monthly/edit/:id"
              component={Edit}
            ></Route>

            <Route
              exact
              path="/dashboard/adhoc/edit/:id"
              component={Edit2}
            ></Route>
            <Route
              exact
              path="/dashboard/adhoc/addadhoc/:userId"
              component={AddAdhoc}
            ></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

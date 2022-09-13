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

export default function UserDB() {
  const token = localStorage.getItem("token");
  const loadedData = JSON.parse(localStorage.getItem("loadedData"));
  let loggedIn = true;
  if (token == null) {
    loggedIn = false;
  }
  return (
    <>
      {loggedIn == false ? <Redirect to="/" /> : null}
      <BrowserRouter>
        <div className="db-body">
          {/* <Post userData={userData} /> */}
          {loadedData != null ? <Post userData={loadedData} /> : null}

          <Switch>
            <Route exact path="/dashboard">
              {loadedData != null ? <Tabs userData={loadedData} /> : null}
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

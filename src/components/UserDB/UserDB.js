import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Post from "./UserMaster/Post.js";
import "./UserDB.css";
import Monthly from "./Monthly/Monthly.js";
import Edit from "./Edit/Edit";
import Edit2 from "./Edit/Edit2";
import Adhoc from "./Adhoc/Adhoc.js";
import AddMonthly from "./NewRequest/AddMonthly.js";
import AddAdhoc from "./NewRequest/AddAdhoc.js";
import "./fancy.css";
import "./UserDB.css";

export default function UserDB() {
  return (
    <BrowserRouter>
      <div className="db-body">
        <Post />

        <Switch>
          <Route exact path="/dashboard" component={Monthly}>
            <Monthly />
            <Adhoc />
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

          {/* <Route
            exact
            path="/dashboard/monthly/addmonthly"
            component={AddMonthly}
          ></Route> */}
          <Route
            exact
            path="/dashboard/monthly/addadhoc"
            component={AddAdhoc}
          ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

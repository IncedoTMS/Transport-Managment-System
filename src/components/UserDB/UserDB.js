import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import UserMaster from "./UserMaster/UserMaster.js";
import "./UserDB.css";
import Monthly from "./Monthly/Monthly.js";
import Edit from "./Edit/Edit";
import Edit2 from "./Edit/Edit2";
import Adhoc from "./Adhoc/Adhoc.js";
import AddMonthly from "./NewRequest/AddMonthly.js";
import AddAdhoc from "./NewRequest/AddAdhoc.js";
import Signin from "../Signin/Signin.js";

export default function UserDB() {
  const history = useHistory();
  const logOut = () => {
    history.push("/");
  };

  return (
    <BrowserRouter>
      <div className="db-body">
        <div className="logout">
          <button className="btn btn-danger" onClick={logOut}>
            Log Out
          </button>
        </div>
        <UserMaster />

        <Switch>
          <Route exact path="/dashboard" component={Monthly}>
            <Adhoc />
            <Monthly />
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
          <Route exact path="/" component={Signin}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

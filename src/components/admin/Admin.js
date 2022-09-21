import React, { useState, useEffect, Suspense, lazy } from "react";
import "./Admin.css";
import axios from "axios";
import GetMonthlyApi from "./GetMonthlyApi";
import GetAdhocApi from "./GetAdhocApi";
import CreateAdhoc from "./CreateAdhoc";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CreateMonthly from "./CreateMonthly";
import "./tables.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const cryptoJs= require('crypto-js');

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Admin() {
  
  

 var localData=JSON.parse(localStorage.getItem("loadedData"));
 

  const [tableDataState, setTableDataState] = useState([]);
  const [adhocDataState, setAdhocState] = useState([]);
  const [value, setValue] = useState(0);
  const [showComponent, setShowComponent] = useState(false);

  const [temp, setTemp] = useState([]);
  const [inputAdhoc, setInputAdhoc] = useState("");
  const [inputMonthly, setInputMonthly] = useState("");

  const [adhocTemp, setAdhocTemp] = useState([]);
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    GetMonthlyApi(setTableDataState);
  }, []);

  useEffect(() => {
    GetAdhocApi(setAdhocState);
  }, []);


  const getMonthString = (date_in_iso) => {
    const date = new Date(date_in_iso);
    const [month, day, year] = [
      date.getMonth(),
      date.getDate(),
      date.getFullYear(),
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let monthStr = months[month] + "-" + year;
    return monthStr;
  };


  const getDateString = (date_in_iso) => {
    const date = new Date(date_in_iso);
    const [month, day, year] = [
      date.getMonth(),
      date.getDate(),
      date.getFullYear(),
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let dateStr = day+"-"+months[month] + "-" + year;
    return dateStr;
  };


  // Calling tableDataMethod to set state

  const handleSearch = (e) => {
    e.preventDefault();
    setInputMonthly(e.target.value);
    let targ = e.target.value.toLowerCase();
    let temp_arr = tableDataState;
    

    let f_arr = temp_arr.filter((el) => {

      let month=getMonthString(el.requestDate);
      let fullName=(el.firstName+" "+el.lastName).toLowerCase();
      console.log(fullName, targ);

  
      return (
        el.id === targ ||
        el.firstName.toLowerCase().includes(targ) || el.lastName.toLowerCase().includes(targ) || fullName.includes(targ) ||
        month.toLowerCase().includes(targ)
      );
    });
    setTemp(f_arr);
  };

  const handleSearch2 = (e) => {
    e.preventDefault();
    setInputAdhoc(e.target.value);
    let targ = e.target.value.toLowerCase();
    let temp_arr = adhocDataState;

    

    let f_arr = temp_arr.filter((el) => {

      let date=getDateString(el.requestDate);
      let fullName=(el.firstName+" "+el.lastName).toLowerCase();
      console.log(fullName);

      return (
        el.id === targ ||
        el.firstName.toLowerCase().includes(targ) || el.lastName.toLowerCase().includes(targ) || fullName.includes(targ) ||
        date.toLowerCase().includes(targ)
      );
    });
    setAdhocTemp(f_arr);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function NoResults() {
    return (
      <center>
        <img
          src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/media/8b4662f8023e4e2295f865106b5d3aa7.gif"
          style={{ height: "50%", width: "50%" }}
        />
      </center>
    );
  }

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(!showComponent);
    }, 1500);
  }, [tableDataState.length == 0, adhocDataState.length == 0]);

  const checkKeyDown = (e) => {
    if (e.code === 'Enter') e.preventDefault();
    };

  return (
    <>
    {localData.roleId!=1?<Redirect to="/" /> :null}
 
      <hr />
      <hr />
      <hr />

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="fullWidth"
            TabIndicatorProps={{ style: { background: "#1976d2" } }}
          >
            <Tab
              label={<h5 className="admin-header">Monthly Requests</h5>}
              {...a11yProps(0)}
            />
            <Tab
              label={<h5 className="admin-header">Adhoc Requests</h5>}
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div
            class="container"
            style={{ marginBottom: "2.5%", marginTop: "2.5%" }}
          >
            {tableDataState.length == 0 ? (
              showComponent ? (
                <NoResults />
              ) : (
                <>
                  <h1 align="center" style={{ color: "gray" }}>
                    Loading...
                  </h1>
                </>
              )
            ) : (
              <>
                <div>
                  <Paper
                   className='inputSearch'
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: 300,
                      marginLeft: "72.4%",
                      marginBottom: "3%",
                      marginTop: "-3%",
                    }}
                    elevation={5}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search By Name/Date"
                      inputProps={{ "aria-label": "search google maps" }}
                      onChange={handleSearch}
                     
                      onKeyDown={(e) => checkKeyDown(e)}
                    />
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                  </Paper>
                  {/* <input
                    className="fontAwesome searchBar"
                    onChange={handleSearch}
                    value={inputMonthly}
                    placeholder="&#xF002; Search Name or Month"
                  /> */}
                </div>

                <CreateMonthly
                  tableData={tableDataState}
                  searchData={temp}
                  loader={GetMonthlyApi}
                  apiDataSetter={setTableDataState}
                  searchInput={inputMonthly}
                />
              </>
            )}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <>
            <div class="container" style={{ marginBottom: "2.5%" }}>
              {adhocDataState.length == 0 ? (
                showComponent ? (
                  <NoResults />
                ) : (
                  <>
                    <h1 align="center" style={{ color: "gray" }}>
                      Loading...
                    </h1>
                  </>
                )
              ) : (
                <>
                  <div>
                    <Paper
                    className='inputSearch'
                      component="form"
                      sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: 300,
                        marginLeft: "72.4%",
                        marginBottom: "3%",
                      }}
                      elevation={5}
                    >
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search By Name/Date"
                        inputProps={{ "aria-label": "search google maps" }}
                        onChange={handleSearch2}
                        onKeyDown={(e) => checkKeyDown(e)}
                        
                      />
                      <IconButton
                        type="button"
                        sx={{ p: "10px" }}
                        aria-label="search"
                      >
                        <SearchIcon />
                      </IconButton>
                    </Paper>
                  </div>
                  {/* <div className="d-flex justify-content-between">
                <input
                  className="fontAwesome searchBar"
                  onChange={handleSearch2}
                  value={inputAdhoc}
                  placeholder="&#xF002; Search Name or Date"
                />
              </div> */}

                  <CreateAdhoc
                    tableData={adhocDataState}
                    searchData={adhocTemp}
                    loader={GetAdhocApi}
                    apiDataSetter={setAdhocState}
                    searchInput={inputAdhoc}
                  />
                </>
              )}
            </div>
          </>
        </TabPanel>
      </Box>

      <hr />
      <hr />
      <hr />
      <hr />
    </>
  );
}

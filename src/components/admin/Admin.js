import React, { useState, useEffect,Suspense,lazy } from "react";
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
  // Added State to wait for JSON API
  const [tableDataState, setTableDataState] = useState([]);
  const [adhocDataState, setAdhocState] = useState([]);
  const [value, setValue] = useState(0);
  const [showComponent, setShowComponent]=useState(false);

  const [temp, setTemp] = useState([]);
  const [inputAdhoc, setInputAdhoc] = useState("");
  const [inputMonthly, setInputMonthly]=useState("");

  const [adhocTemp, setAdhocTemp] = useState([]);
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    GetMonthlyApi(setTableDataState);
  }, []);

  useEffect(() => {
    GetAdhocApi(setAdhocState);
  }, []);

  // Calling tableDataMethod to set state


  const handleSearch = (e) => {
    setInputMonthly(e.target.value);
    let targ = e.target.value.toLowerCase();
    let temp_arr = tableDataState;
    let f_arr = temp_arr.filter((el) => {
      return (
        el.id === targ ||
        el.empName.toLowerCase().includes(targ) ||
        el.month.toLowerCase().includes(targ)
      );
    });
    setTemp(f_arr);
  };

  const handleSearch2 = (e) => {
    setInputAdhoc(e.target.value);
    let targ = e.target.value.toLowerCase();
    let temp_arr = adhocDataState;
    let f_arr = temp_arr.filter((el) => {
      return (
        el.id === targ ||
        el.empName.toLowerCase().includes(targ) ||
        el.date.toLowerCase().includes(targ)
      );
    });
    setAdhocTemp(f_arr);
    
  };






  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  function NoResults(){

    return (
      <center>
                <img
                  src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/media/8b4662f8023e4e2295f865106b5d3aa7.gif"
                  style={{ height: "50%", width: "50%" }}
                />
              </center>


    );
  }

  useEffect(()=>{

    setTimeout(()=>{
      setShowComponent(!showComponent)
    },3000)
  },[tableDataState.length == 0, adhocDataState.length == 0]);

  return (
    <>
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

            showComponent?<NoResults />:<><h1 align="center" style={{color:"gray"}}>Loading...</h1></>
              
              ) : (

              <>
              <div className="d-flex justify-content-between">
              <input
                className="fontAwesome searchBar"
                onChange={handleSearch}
                value={inputMonthly}
                placeholder="&#xF002; Search Name or Month"
              />
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
              
              showComponent?<NoResults />:<><h1 align="center" style={{color:"gray"}}>Loading...</h1></>
            

              ) : (

                <>
                <div className="d-flex justify-content-between">
                <input
                  className="fontAwesome searchBar"
                  onChange={handleSearch2}
                  value={inputAdhoc}
                  placeholder="&#xF002; Search Name or Date"
                />
              </div>

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

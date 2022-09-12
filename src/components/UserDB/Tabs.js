import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Monthly from "./Monthly/Monthly";
import Adhoc from "./Adhoc/Adhoc";
import axios from "axios";
import { useState, useEffect } from "react";

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
          <Typography component={"div"}>{children}</Typography>
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

export default function BasicTabs({ userData }) {
  const [users, setUser] = useState([]);
  const [userId, setUserId] = useState();

  const loadUsers = async () => {
    try {
      const res = await axios.get(
        "https://localhost:44371/api/v1/user/(empcode,name,email)",
        {
          params: {
            EmpCode: userData.empCode,
          },
        }
      );
      if (res.data) {
        res.data.map((user) => {
          setUser(user);
          setUserId(user.id);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadUsers();
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "96%",
        margin: "auto",
        border: "1px solid white",
        borderRadius: "5px",
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          textColor="primary"
          indicatorColor="primary"
          variant="fullWidth"
        >
          <Tab
            label="Monthly Requests"
            sx={{ fontSize: "1.1rem", fontWeight: "bold" }}
            {...a11yProps(0)}
          />
          <Tab
            label="Adhoc Requests"
            sx={{ fontSize: "1.1rem", fontWeight: "bold" }}
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {userId != null ? <Monthly userId={userId} /> : null}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {userId != null ? <Adhoc userId={userId} /> : null}
      </TabPanel>
    </Box>
  );
}

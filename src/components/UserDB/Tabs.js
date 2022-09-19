import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import MonthlyTable from "./Monthly/MonthlyTable";
import AdhocTable from "./Adhoc/AdhocTable";

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

export default function BasicTabs({ userId }) {
  const [cabs, setCabs] = useState([]);
  useEffect(() => {
    loadCabDetails();
  }, []);
  const loadCabDetails = async () => {
    try {
      const res = await axios.get(
        "https://tms-incedo-demo.azurewebsites.net/api/v1/cabrequirment/(id,userid,roleid)",
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
  const monthlyCabs = cabs.filter((cab) => cab.isAdhoc === false);
  const adhocCabs = cabs.filter((cab) => cab.isAdhoc === true).reverse();

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
            label="Adhoc Requests"
            sx={{ fontSize: "1.1rem", fontWeight: "bold" }}
            {...a11yProps(0)}
          />
          <Tab
            label="Monthly Requests"
            sx={{ fontSize: "1.1rem", fontWeight: "bold" }}
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {adhocCabs.length > 0 ? (
          <AdhocTable data={adhocCabs} />
        ) : (
          <p>No Adhoc cab data.</p>
        )}
        <div style={{ textAlign: "center" }}>
          <Link to={`/dashboard/adhoc/addadhoc/${userId}`}>
            <Button
              variant="contained"
              startIcon={<AddIcon fontSize="large" />}
            >
              Add New Request
            </Button>
          </Link>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {monthlyCabs.length > 0 ? (
          <MonthlyTable data={monthlyCabs} />
        ) : (
          <p>No Monthly cab data.</p>
        )}
      </TabPanel>
    </Box>
  );
}

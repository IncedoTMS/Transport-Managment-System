const axios = require("axios");
var oneTime = true;
var tableData = [];
var data = [];

// Setter function for TableDataState

const GetMonthlyApi = (setter) => {
  tableData = [];
    axios
      .get("https://tms-incedo-demo.azurewebsites.net/api/v1/cabrequirment",
      
      {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
      
      
      )
      .then((resp) => {

        data = resp.data;
        data.forEach((e) => {
          // console.log(e);
        if(!e.isAdhoc) tableData.push(e);
        });

       
        // Once API call is complete and array is not empty,
        // setter sets the state and sends tableData to Admin.js
        setter(tableData);
      })
      .catch((error) => {
        console.log(error);
      });
  
};
export default GetMonthlyApi;

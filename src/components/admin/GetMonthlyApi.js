const axios = require("axios");
var oneTime = true;
var tableData = [];
var data = [];

// Setter function for TableDataState

const GetMonthlyApi = (setter) => {
  let localData=JSON.parse(localStorage.getItem("loadedData"));
  console.log(localData.empCode);
  tableData = [];
    axios
      .get("https://localhost:44371/api/v1/cabrequirment/(id,userid,roleid,managerid)",
      
      {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },

        params:{
          ManagerId:localData.empCode
        }
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

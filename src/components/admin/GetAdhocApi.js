const axios = require("axios");
var oneTime = true;
var adhocTableData = [];
var data = [];

// Setter function for adhocTableDataState



const GetAdhocApi = (setter) => {
  let localData=JSON.parse(localStorage.getItem("loadedData"));
  console.log(localData.empCode);

  adhocTableData = [];
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
        if(e.isAdhoc) adhocTableData.push(e);
        // console.log(e);
      });
      // Once API call is complete and array is not empty,
      // setter sets the state and sends adhocTableData to Admin.js
      setter(adhocTableData);
    })
    .catch((error) => {
      console.log(error);
    });
};
export default GetAdhocApi;

const axios = require("axios");
var oneTime = true;
var adhocTableData = [];
var data = [];

// Setter function for adhocTableDataState



const GetAdhocApi = (setter) => {
  adhocTableData = [];
  axios
    .get(
      "http://localhost:3000/adhoc",

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
        adhocTableData.push(e);
        console.log(e);
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

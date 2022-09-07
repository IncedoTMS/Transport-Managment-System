const axios = require("axios");
var oneTime = true;
var tableData = [];
var data = [];

// Setter function for TableDataState

const tableDataMethod = (setter) => {
  if (oneTime) {
    axios
      .get("http://localhost:3000/monthly")
      .then((resp) => {
        data = resp.data;
        data.forEach((e) => {
          tableData.push(e);
        });
        // Once API call is complete and array is not empty,
        // setter sets the state and sends tableData to Admin.js
        setter(tableData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
export default tableDataMethod;

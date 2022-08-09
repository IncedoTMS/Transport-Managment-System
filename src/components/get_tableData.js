const axios = require('axios');

var tableData = [];
var data = [];

// Setter function for TableDataState
const tableDataMethod = (setter) => {
    axios.get('http://localhost:3000/tableData')
        .then(resp => {
            data = resp.data;
            data.forEach(e => {
                tableData.push(e);

                console.log(`${e.id}, ${e.name}, ${e.status}`);
            });
            // Once API call is complete and array is not empty,
            // setter sets the state and sends tableData to Admin.js
            setter(tableData)

        })
        .catch(error => {
            console.log(error);
        });

};
export default tableDataMethod;


// import { useState ,useEffect} from 'react';

const axios = require('axios');
var oneTime = true
var tableData = [];
var data = [];

// Setter function for TableDataState

const tableDataMethod = (setter) => {
    if(oneTime){
    axios.get('http://localhost:3000/tableData')
        .then(resp => {
            // const [oneTime, setOneTime] = useState(2)
            data = resp.data;
            data.forEach(e => {
                tableData.push(e);

                // console.log(`${e.id}, ${e.name}, ${e.status}`);
            });
            // Once API call is complete and array is not empty,
            // setter sets the state and sends tableData to Admin.js
            setter(tableData)
            // oneTime = !oneTime
        })
        .catch(error => {
            console.log(error);
        });
    }
};
export default tableDataMethod;


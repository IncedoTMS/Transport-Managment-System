// import { useState ,useEffect} from 'react';

const axios = require('axios');
var oneTime = true
var adhocTableData = [];
var data = [];

// Setter function for adhocTableDataState

const AdhocDataMethod = (setter) => {
    if(oneTime){
    axios.get('http://localhost:3000/adhoc')
        .then(resp => {
            // const [oneTime, setOneTime] = useState(2)
            data = resp.data;
            data.forEach(e => {
                adhocTableData.push(e);

                // console.log(`${e.id}, ${e.name}, ${e.status}`);
            });
            // Once API call is complete and array is not empty,
            // setter sets the state and sends adhocTableData to Admin.js
            setter(adhocTableData)
            // oneTime = !oneTime
        })
        .catch(error => {
            console.log(error);
        });
    }
};
export default AdhocDataMethod;


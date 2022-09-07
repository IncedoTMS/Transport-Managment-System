// import { useState ,useEffect} from 'react';

const axios = require('axios');
var oneTime = true
var adhocTableData = [];
var data = [];

// Setter function for adhocTableDataState

const AdhocDataMethod = (setter) => {
    adhocTableData=[];
    axios.get('http://localhost:3000/adhoc',
    
    {headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      }}
    
    )
        .then(resp => {
            // const [oneTime, setOneTime] = useState(2)
            data = resp.data;
            data.forEach(e => {
                adhocTableData.push(e);
                console.log(e);

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

};
export default AdhocDataMethod;


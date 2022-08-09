const axios = require('axios');

var tableData = [];
var data = [];

axios.get('http://localhost:3000/tableData')
    .then(resp => {
        data = resp.data;
        data.forEach(e => {
            tableData.push(e);
            
            console.log(`${e.id}, ${e.name}, ${e.status}`);
        });
        
    })
    .catch(error => {
        console.log(error);
    });

    export {tableData};

     
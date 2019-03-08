const AWS = require('aws-sdk');
var s3 = new AWS.S3();
const fetch = require('node-fetch');
let count = 0;
var today = new Date();

var params = {
    Bucket: "cjafet/platzi", 
    Key: "products.json"
};

 s3.getObject(params, function(err, data) {
    if (err) {
        console.log(err, err.stack); // an error occurred
    } else {
        //console.log(data.Body.toString('utf-8'));
        let obj = JSON.parse(data.Body.toString('utf-8'));
        
        for (var i = 0; i < obj.length; i++) {                                               

            // faz o post de um objeto por vez
            callApi(obj[i]).then(res => {
                console.log(res);
            })

        }

        function callApi (product) {
            return fetch('http://127.0.0.1:3000/products', { method: 'POST', body: JSON.stringify(product), headers: { 'Content-Type': 'application/json' } })
            .then(res => { 
                return res.json();
            }).catch( err => {
                console.log(err);
            });
        }

    }    
 });
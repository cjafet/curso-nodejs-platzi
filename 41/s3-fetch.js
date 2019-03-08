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
        console.log(data.Body.toString('utf-8'));
        obj = JSON.parse(data.Body.toString('utf-8'));

        //console.log(JSON.stringify(obj));

        fetch('https://postman-echo.com/post', { method: 'POST', body: JSON.stringify(obj) })
        .then(res => res.json()) // expecting a json response
        .then(json => console.log(json));

    }    
 });
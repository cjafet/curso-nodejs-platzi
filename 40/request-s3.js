const AWS = require('aws-sdk');
var s3 = new AWS.S3();
var request = require('request');
let count = 0;

var today = new Date();

var params = {
    Bucket: "cjafet/platzi", 
    Key: "read-products.json"
};


 s3.getObject(params, function(err, data) {
    if (err) {
        console.log(err, err.stack); // an error occurred
    } else {
        console.log(data.Body.toString('utf-8'));
        obj = JSON.parse(data.Body.toString('utf-8'));
        
        for (var i = 0; i < obj.length; i++) {                                               
            if (obj[i]["productId"] == 1000) {

                let queryString = [];
                for (var prop in obj[i]) {
                    queryString.push(prop + '=' + obj[i][prop]);
                }
                queryString = queryString.join("&");
            
                request('https://postman-echo.com/get?' + queryString, function (error, response, body) {
                    if (error) { 
                        console.log('error:', error);
                    } else {
                        console.log('statusCode:', response && response.statusCode);
                        console.log('body:', body); 
                    }
                });    

            }   
        }

    }    
 });
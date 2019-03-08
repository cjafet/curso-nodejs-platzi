const AWS = require('aws-sdk');
var s3 = new AWS.S3();

var today = new Date();

var params = {
    Bucket: "cjafet/platzi", 
    Key: "read-products.json"
};

s3.getObject(params, function(err, data) {
    if (err) {
        console.log(err, err.stack);
    }  else {
    let obj = JSON.parse(data.Body.toString('utf-8'));
    console.log(obj); 
    }     
});

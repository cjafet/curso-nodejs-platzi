const AWS = require('aws-sdk');
var s3 = new AWS.S3();
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


    for (var i = 0; i < obj.length; i++) {                                               
        if (obj[i]["productId"] == 101) {
            console.log(obj[i]);
            count += 1;
        }   
    }

    for (var i = 0; i < obj.length; i++) {                                               
        // add datetime property to the object
        obj[i]['datetime'] = today.toISOString();
        // remove title property from object
        delete obj[i]['title'];
        for (var prop in obj[i]) {
            if (prop == "salesAmount") {
                let amount = 'R$ ' + obj[i]['salesAmount'];
                obj[i]['salesAmount'] = amount.replace(".", ",");
            }
        }
        console.log(obj[i]);   
    }

    putS3(obj).then((res) => {
        console.log("File saved to S3");
        console.log(res);
    });

    }    
});

async function putS3(file) {
    let promise = new Promise((resolve, reject) => {
        var params = {
            Body: JSON.stringify(file), 
            Bucket: "cjafet/platzi", 
            Key: "product-etl.json"
        };
        s3.putObject(params, function(err, data) {
            if (err) {
                resolve(err); 
            } else {
                resolve(data);
            }            
        });
    });   
    let result = await promise;
    return result;
}
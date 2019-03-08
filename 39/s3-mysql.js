const mysql = require('mysql');
const AWS = require('aws-sdk');
var s3 = new AWS.S3();


let pool  = mysql.createPool({
    connectionLimit : 10,
    host            : '127.0.0.1',
    user            : 'root',
    password        : 'root',
    database        : 'products'
});


let count = 0;

var params = {
    Bucket: "cjafet/platzi", 
    Key: "read-products.json"
};

 s3.getObject(params, function(err, data) {
    if (err) {
        console.log(err, err.stack); // an error occurred
    } else {
        //console.log(data.Body.toString('utf-8'));
        obj = JSON.parse(data.Body.toString('utf-8'));

        for (var i = 0; i < obj.length; i++) {
            
            obj[i]['datetime'] = new Date().toISOString().slice(0, 19).replace('T', ' ');
            console.log(obj[i]['datetime']);

            count += 1;
            let brand, id, price, dt;
            for (var prop in obj[i]) {
                if (prop == 'brand') {
                    brand = obj[i][prop];
                }
                if (prop == 'salesAmount') {
                    price = obj[i][prop];
                }
                if (prop == 'productId') {
                    id = obj[i][prop];
                }
                if (prop == 'datetime') {
                    dt = obj[i][prop];
                }
            }

            let query = "INSERT INTO product(brand, productid, price, date) VALUES ('" + brand + "'," + id + "," + price + ",'" + dt + "')";
            pool.query(query, function (error, results, fields) {
                if (error) throw error;
                pool.end(function (err) {
                    if (err) throw err;
                    console.log(`Data inserted successfully into database`);
                    console.log(`Ending connection pools!`);
                });
            }); 
        }
    }
});
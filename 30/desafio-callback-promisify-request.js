var request = require('request');
const { promisify } = require('util'); // ships with node
const req = promisify(request);

function callback(error, response, body) {   
    products = JSON.parse(response.body);
    products.forEach(element => {
        console.log(element);
        console.log("--------------------------------------------")
    });
}

request('http://127.0.0.1:3000/products', callback);

req('http://127.0.0.1:3000/products').then(response => {
    console.log(response.body);
});


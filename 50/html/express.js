var express = require('express');
var app = express();

let products = [];

let product = { id: 10, brand: 'Amazon' };

// All app methods are http methods


app.get('/', function (req, res) {
    // __dirname current directory name
    res.sendFile(__dirname + '/index.html', function(err) {
        if(err) {
            res.status(500).send(err);
        }
    }); // you do not need to read the file content because res.sendFile reads it internally
});


// For any get request to / run this function
app.get('/products', function (req, res) {
  res.send('Receives a Get Request');
  res.json(products);
});

app.get('/products/:id', function (req, res) {
    let product = _.find(products, {id: req.params.id});
    //res.json(product);
    
});


app.get('/data', function(req, res) {
    res.json(product);
});


// For any post request to / run this function
app.post('/products', function (req, res) {
    let product = req.body;
    console.log(product);
    products.push(product);
    res.send(product);
});

 
app.listen(3000);
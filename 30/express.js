var express = require('express');
var app = express();
var _ = require('lodash');
var bodyParser = require('body-parser');

let products = [
{"brand":"Amazon","title":"Alexa 2rd Generation","price":"19.99"},
{"brand":"Amazon","title":"Alexa 3rd Generation","price":"29.99"},
{"brand":"Amazon","title":"Fire 8","price":"59.99"}
];

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



// All app methods are http methods
// For any get request run this function
app.get('/products', function (req, res) {
  //res.send('Receives a Get Request');
  res.json(products);
});

app.get('/products/:id', function (req, res) {
    // lodash will find any object in the products array that has an id property whose id matches the req.params.id 
    /**
     * any array like collection
     * @param array 
     */
    let product = _.find(products, {id: req.params.id});
    res.json(product);
    
});


// For any post request to / run this function
app.post('/products', function (req, res) {
    let product = req.body;
    console.log(product);
    products.push(product);
    res.json(products);
});

 
app.listen(3000);
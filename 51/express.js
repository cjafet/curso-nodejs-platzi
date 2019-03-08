var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var _ = require('lodash');

let products = [
    {"brand":"Amazon","title":"Alexa 2rd Generation","price":"19.99"},
    {"brand":"Amazon","title":"Alexa 3rd Generation","price":"29.99"},
    {"brand":"Amazon","title":"Fire 8","price":"59.99"}
    ];

app.use('/', express.static('html'));
app.use('/images', express.static('images'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// by default express does not know how to handle json
// this is just to make possible to post json data to our server
// and it will be available in req.body


app.get('/', function (req, res) {
    // __dirname current directory name
    res.sendFile(__dirname + '/index.html', function(err) {
        if(err) {
            res.status(500).send(err);
        }
    }); // you do not need to read the file content because res.sendFile reads it internally
});


app.get('/products/', function (req, res) {
    res.json(products);
});

app.get('/products/:id', function (req, res) {
    // __dirname current directory name
    let prod = _.find(products, {id: parseInt(req.params.id)});
    console.log(prod);
    res.json(prod);
});

app.post('/products', function (req, res) {
    let product = req.body;
    console.log(product);
    products.push(product);
    res.json(products);

    let prod = _.find(products, {price: parseInt(req.params.id)});

});

 
app.listen(3000);
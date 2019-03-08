var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var _ = require('lodash');
var ProductModel = require('./productModel');

// This is how you connect to Mongo with Mongoose
const mongoose = require('mongoose');
// mongodb://127.0.0.1/dbName - if dbName does not exists mongo will create it
mongoose.connect('mongodb://127.0.0.1/products',{useNewUrlParser: true});

app.use('/', express.static('html'));
app.use('/images', express.static('images'));

// by default express does not know how to handle json
// this is just to make possible to post json data to our server
// and it will be available in req.body
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    // __dirname current directory name
    res.sendFile(__dirname + '/index.html', function(err) {
        if(err) {
            res.status(500).send(err);
        }
    }); // you do not need to read the file content because res.sendFile reads it internally
});


app.get('/products', function (req, res) {
    ProductModel.find((error,response) => {
        if (error) next(error);
        console.log(error, response);
        res.json(response);
    });
});

app.get('/products/:id', function (req, res) {
    // __dirname current directory name
    ProductModel.findById(req.params.id, (error,response) => {
        console.log(error, response);
        res.json(response);
    });
});

app.post('/products', function (req, res) {
    let product = req.body;
    ProductModel.create(product, (err,data) => {
            if (err) console.log(err);
            res.json(data);
    });
});

 
app.listen(3000);
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

// first middleware
app.use(function(req, res, next){
console.log('hang in there. i have no else to go.');
// need to do this in order to go to the next function
next(); 
// or if you want response back to the client already
});

// EVERY ROUTE HAS A NEXT FUNCTION AS WELL


// express.static('client')
// returns function(req,res,next) { next(); } next will go to bodyParser 
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', function(req, res, next) {

// if you do this, there is nothing after this. no middleware after this.
// next();
});



var express = require('express');
var app = express();

let products = [];

app.use('/', express.static('html'));
app.use('/images', express.static('images'));


app.get('/', function (req, res) {
    // __dirname current directory name
    res.sendFile(__dirname + '/index.html', function(err) {
        if(err) {
            res.status(500).send(err);
        }
    }); // you do not need to read the file content because res.sendFile reads it internally
});


 
app.listen(6000);
const fs = require('fs');
var express = require('express');
var app = express();
const port = 3000;

app.get('/videos', function (req, res) {
    // __dirname current directory name
    res.writeHead(200, {'Content-Type': 'video/mp4'});
    fs.createReadStream('./platzi.mp4').pipe(res);
});

 
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
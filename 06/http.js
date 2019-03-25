const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 7000;

const server = http.createServer((req, res) => {
    let url = req.url;
    url = url.split('?');
    console.log(url);
    let path = url[0].toLowerCase();

    if (path == '/videos') {   
        res.writeHead(200, {'Content-Type': 'video/mp4'});
        fs.createReadStream('./platzi.mp4').pipe(res);
    }

});


server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
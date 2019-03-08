const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 7000;

const server = http.createServer((req, res) => {   
    
    let url = req.url;
    url = url.split('?');
    let path = url[0].toLowerCase();

    if (path == "/api") {
        fs.readFile('./products.json', (err, data) => {
            if (err) {
                res.writeHead(404, { 'content-type': 'text/plain'});
                res.end('404 Page Not Found');
            }
            res.writeHead(200, { 'content-type': 'application/json'});
            res.end(data);
        });
    } else if (path == "/mobile") {
        res.write("Acessando a rota /mobile");
        res.end();
    } else {
        res.write("Acessando uma outra rota");
        res.end();
    }
});


server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
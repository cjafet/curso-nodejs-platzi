const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 7000;

const server = http.createServer((req, res) => {   
    let url = req.url;
    url = url.split('?');
    let path = url[0].toLowerCase();

    function get_handler() {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('GET request received');
    }

    function post_handler() {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('POST request received');
    }

    function put_handler() {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('PUT request received');
    }

    function delete_handler() {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('DELETE  request received');
    }

    switch (req.method) {
        case 'GET':
            get_handler();
            break;
        case 'POST':
            post_handler();
            break;
        case 'PUT':
            put_handler();
            break;
        case 'DELETE':
            delete_handler();
    }

});


server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
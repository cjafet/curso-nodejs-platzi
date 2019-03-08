const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 7000;

const server = http.createServer((req, res) => {   

    res.write("Criando um servidor web com o modulo http");
    res.end();

});


server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
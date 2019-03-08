// ES2015 introduziu duas palavras chaves novas let e const
const fs = require("fs");
let content;

fs.readFile("./file.txt", 'utf-8', (err, res) => {
    console.log(res);
});

// do lots of code here and some point in the code 
// you decide to create your own fs var

fs = content + "\n Lendo próximo arquivo";

fs.readFile("./file.txt", 'utf-8', (err, res) => {
    console.log(res);
});


fs = require('fs');
const { promisify } = require('util'); // ships with node
const readdir = promisify(fs.readdir);

readdir('./').then(console.log);
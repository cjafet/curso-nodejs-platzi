var debug = require('debug')('fs');
const fs = require("fs");
var name = 'Debug App';

/**
 * 
 * RUN THIS IN THE TERMINAL TO INSTALL THE MODULE AND ENABLE DEBUG
 * npm install debug
 * $env:DEBUG = "*,-not_this"
 * 
 */  


if (debug.enabled) {
    debug('booting %o', name);
} else {
    console.log('Not enabled');
}

debug('starting readFile');
fs.readFile('./text.txt', (err, data) => {
    if (err) {
        debug(err);
    } else {
        debug(data.toString());
    }
});


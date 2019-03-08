// callback is async have some sort of waiting
// non blocking io
// you can deal with async code with callback, promises
// a function that is passed as an argument is a callback???
var request = require('request');


function callback(error, response, body) {
    console.log('statusCode:', response && response.statusCode); 
}

// callback function will be call back when the request gets a response back / when it is done.
// this function will not block code execution
// thats why end of process shows first
request('http://www.google.com', callback);

console.log('end of process');
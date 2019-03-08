var request = require('request');
const { promisify } = require('util'); // ships with node
const get = promisify(request);
let responses = [];

async function getRequest(url) {
    let promise = new Promise((resolve, reject) => {
        get(url).then(response => {
            responses.push(response.statusCode);
            resolve();
        })
    });

    let result = await promise;
    return result;
};

Promise.all([
    getRequest('http://stackoverflow.com'),
    getRequest('http://www.google.com'),
    getRequest('http://www.platzi.com')
]).then(() => {
    console.log(responses);
})




let promise = (miliseconds) => new Promise((resolve, reject) => {
    console.log(`Resolving the promise in ${miliseconds} miliseconds`);
    setTimeout(() => {
        resolve("End of async operation");      
    }, miliseconds);
});

promise(3000)
.then(function (response) {
    console.log(response);
    return 4000;
})
.then(function (response) { 
    console.log(response);
    console.log('Doing some final stuffs here');
    promise(response).then(() => console.log('end of process'));
});
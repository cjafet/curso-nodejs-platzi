let promise = (miliseconds) => new Promise(function(resolve, reject) {
    // simulates async operation and resolves it after finish or reject
    if (miliseconds > 4000) {
        reject('Operation Fail');      
    } else {
        setTimeout(() => {
            resolve('End of async operation');
        }, miliseconds);
    }
});

promise(5000)
.then(console.log)
.catch((error) => console.log(`Promise rejected with error: ${error}`));
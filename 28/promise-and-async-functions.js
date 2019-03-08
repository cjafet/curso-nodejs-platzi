
// There is times you just want to execute a promise with different params and go next one after
let promise = (miliseconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();      
    }, miliseconds);
});

// async allows to write code that appears synchronous
// inside of an async function you can await for a promise to complete
// just want to wait for the result of a promise and than run more code
doProcess = async () => {
    console.log("Start processing hour");
    // waits for promise to be resolved
    await promise(3000); // wait for a result before executing next line of code
    console.log('end of first process');
    await promise(4000); // wait for a result before executing next line of code
    console.log('end of second process');
};

doProcess();
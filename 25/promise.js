
// CADA OBJETO PROMISE TEM UM MÉTOO THEN

// you do not need to pass a callback method to a promise. thats why it was created. to deal with multiple callback functions aligned togheter.

let promise = (miliseconds) => new Promise((resolve, reject) => {
    console.log(`Resolving the promise in ${miliseconds} miliseconds`);    
    setTimeout(() => {
        resolve("End of async operation");      
    }, miliseconds);
});

promise(1000).then(res => {
    console.log(res)
})

//returns a promise object, um objeto promise
let pro = promise(2000);
console.log(pro);
promise(4000).then(value => console.log(value));
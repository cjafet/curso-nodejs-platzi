// Generators are a new type of function that allows us to pause functions in the middle of execution 
// You know your function is a generator when you have an * on it
function* gen() {
    yield 'This function is paused until we call next() on it';
    let user = { class_name: 'Node' };
    yield user;
};

var generator = gen();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

var generator = gen();
console.log("-------------------------");
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

var generator = gen();
console.log("-------------------------");
console.log(generator.next().done);
console.log(generator.next().done);
console.log(generator.next().done);


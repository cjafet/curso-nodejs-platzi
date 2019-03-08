function printWelcomeMessage(user='Platzi', classe='NodeJS') {
    console.log(`Hi ${user}, Welcome to the ${classe} class!`);
}
  

printWelcomeMessage();
printWelcomeMessage('Lucas','API Design with Node and Express');

// The new syntax: => 
// How you do it?
// 1. Change {} for =>
// 2. Assign it to a function name

let printWelcome = (user='Platzi', classe='NodeJS') => console.log(`Hi ${user}, Welcome to the ${classe} class!`);
printWelcome();
printWelcome('Gabriel','API Design with Node and Express');
printWelcome(undefined,'API Design with Node, Express and MongoDB');

// For one parameter you do not need the parenthesis
let welcomeClass = classe => console.log(`Welcome to the ${classe} class!`);
welcomeClass('API Design with Node, Express and MongoDB');



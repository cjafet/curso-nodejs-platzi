let users = require('./users.json');

let roots = users.map(addLoginName);

function addLoginName(user) {
    //console.log(user);
    let first = user.firstName;
    let last = user.lastName;
    let userName = first.toLowerCase() + "." + last.toLowerCase();
    // Add property userName to the object
    user['userName'] = userName;
    return user;
}

console.log(roots);
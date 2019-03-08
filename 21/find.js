let products = require("./products.json");

let userCartItems = [
    {
        productId: 1000,
        quantity: 1
    },
    {
        productId: 101,
        quantity: 2
    }
];

products.forEach(function(el) {
    // if item.productId exists in our products array
    // will return true or undefined 
    let found = userCartItems.find(item => item.productId == el.productId); 
    // Mount checkout with products details only if product is in stock or quantity is not 0(quantity > 0)
    if (found && el.quantity != 0) return console.log(el);
});

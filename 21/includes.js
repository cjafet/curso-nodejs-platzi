// Suppose you want to find out unique list of the products types sold in a period
let soldProducts = require('./sold-products.json');

let productsIds = soldProducts.map(products => products.productId); // products here is our element of the array
// [ 1000, 100, 101, 102, 101, 102, 101, 100, 101 ]

// Check if you sell productId 1001
// @return boll
console.log(productsIds.includes(1001));

// Check if you sell productId 102
// @return boll
console.log(productsIds.includes(102));
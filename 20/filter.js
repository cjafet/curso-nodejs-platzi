let products = require("./products.json");

function orderProducts(product) {
  return product.salesAmount <= 100;
}
  

/**
 * filter calls callbackfn once for each element in the array, in ascending order, 
 * and constructs a new array with all the values for which callbackfn returns true.
 * @param callbackfn 
 */
let filtered = products.filter(orderProducts);

console.log(filtered);
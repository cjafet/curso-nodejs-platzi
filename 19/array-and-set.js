// Suppose you want to find out unique list of the products types sold in a period
let soldProducts = [
    {
        title: "Samsung Galaxy Tab 4 4G LTE Tablet, Black 8-Inch 16GB (Verizon Wireless)",
        brand: "Samsung",
        productId: 1000,
        salesAmount: 195.00
    },
    {
        title: "Fire HD 10 Tablet with Alexa Hands-Free, 10.1 1080p Full HD Display, 32 GB, Marine Blue - with Special Offers",
        brand: "Amazon",
        productId: 100,
        salesAmount: 119.99
    },
    {
        title: "Fire 7 Tablet with Alexa, 7 Display, 8 GB, Black - with Special Offers",
        brand: "Amazon",
        productId: 101,
        salesAmount: 39.99
    },
    {
        title: "All-New Fire HD 8 Kids Edition Tablet, 8 HD Display, 32 GB, Blue Kid-Proof Case",
        brand: "Amazon",
        productId: 102,
        salesAmount: 99.99
    },
    {
        title: "Fire 7 Tablet with Alexa, 7 Display, 8 GB, Black - with Special Offers",
        brand: "Amazon",
        productId: 101,
        salesAmount: 39.99
    },
    {
        title: "All-New Fire HD 8 Kids Edition Tablet, 8 HD Display, 32 GB, Blue Kid-Proof Case",
        brand: "Amazon",
        productId: 102,
        salesAmount: 99.99
    },
    {
        title: "Fire 7 Tablet with Alexa, 7 Display, 8 GB, Black - with Special Offers",
        brand: "Amazon",
        productId: 101,
        salesAmount: 39.99
    },
    {
        title: "Fire HD 10 Tablet with Alexa Hands-Free, 10.1 1080p Full HD Display, 32 GB, Marine Blue - with Special Offers",
        brand: "Amazon",
        productId: 100,
        salesAmount: 119.99
    },
    {
        title: "Fire 7 Tablet with Alexa, 7 Display, 8 GB, Black - with Special Offers",
        brand: "Amazon",
        productId: 101,
        salesAmount: 39.99
    }
];

let productsIds = soldProducts.map(products => products.productId);

/**
 * Get all productsIds
 * 
 * @name Map
 * @description  map calls callbackfn once for each element in the array, in ascending order, and constructs a new Array from the results
 * @method Array.prototype.map()
 * @param callbackfn(element,index, array), thisArg
 * @returns array
 * 
 */
 let productsIds = soldProducts.map(products => products.productId); // products here is our element of the array

/**
 * @name Set
 * @description
 * @method
 * @param
 * @returns object
 */
var set = new Set(productsIds);
console.log(set, set.size);


// Suppose you have multiple arrays with different sales by day
// DAY 1
let soldProductsDay1 = [
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
    },
];

console.log(soldProductsDay1.length);

// DAY 1
let soldProductsDay2 = [
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
        title: "Fire 7 Tablet with Alexa, 7 Display, 8 GB, Black - with Special Offers",
        brand: "Amazon",
        productId: 101,
        salesAmount: 39.99
    },
];

console.log(soldProductsDay2.length);

let totalProductsSold = [...soldProductsDay1, ...soldProductsDay2];
console.log(totalProductsSold);
console.log(totalProductsSold.length);
let sales = require("./sales.json");

function totalSales(accumulator, currentValue, index, array) {
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, array: ${array}`);
    return accumulator + currentValue; 
} 

// send param x to a function => and return x.salesAmount
// uses arrow function
let total = sales.map(x => x.salesAmount).reduce(totalSales);
console.log(total);

/**
 * 
 * @param callbackfn
 * @returns array
 */
let tt = sales.map(getAmount);

function getAmount(x) {
    // return x => x.salesAmount;
    return x.salesAmount;
}

console.log(tt);

/** 
 * @name 
 * @description If no initialValue was provided, then previousValue will be equal to the first value in the array and currentValue will be equal to the second
 * @method Array.prototype.reduce ( callbackfn [ , initialValue ] )
 * @param callbackfn(previousValue, currentValue, currentIndex, array),initialValue
 * @returns accumulator
 */
let t = tt.reduce(totalSales,0);
console.log(t);
// Type Conversion using JavaScript Methods
// String to Number
let str = "5.55";
console.log(Number(str));           // 5.55
// String to Float Value (Decimal)
console.log(parseFloat(str));       // 5.55
// String to Integer Value
console.log(parseInt(str));         // 5

// Boolean to Number
console.log(Number(false));         // 0
console.log(Number(true));          // 1

// Number to String
let num = 5;
console.log(String(num));           // 5

// Boolean to String
console.log(String(false));         // false
// Using toString() method
console.log(true.toString());       // true


// Automatic Type Conversion by JavaScript
// Converts number 5 to a string and concatenate
console.log(5 + "10");              // 510
console.log("10" + 5);              // 105

// Converts string 5 to a number
console.log("5" - 1);               // 4
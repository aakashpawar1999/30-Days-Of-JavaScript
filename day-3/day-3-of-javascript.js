// String
let box = "books";   // (double inverted comma)
let box = 'books';   // (single inverted comma)
let box = `books`;   // (backtick)
console.log(box);    // books

let box = `These are 
my books`;
console.log(box);    // These are
		  			 // my books

let num_1 = 5;
let num_2 = 10;
let sum = `SUM = ${num_1 + num_2}`;
console.log(sum);    		// SUM = 15
console.log(typeof sum);    // string

let myName = "Aakash";
let greet = `Hello ${myName}`;
console.log(greet);    		// Hello Aakash 
console.log(typeof greet);	// string


// Number
let num_1 = 10;
console.log(num_1);    		// 10
console.log(typeof num_1);  // number

let num_2 = 10.5;
console.log(num_2);    		// 10.5
console.log(typeof num_2);  // number


// Boolean
let num_1 = 10;
let num_2 = 10;
console.log(num_1 == num_2);    		// true
console.log(typeof (num_1 == num_2));   // boolean


// Undefined
let firstName;
console.log(firstName);    		// undefined
console.log(typeof firstName);  // undefined


// Null
let lastName = null;
console.log(lastName);    		// null
console.log(typeof lastName);   // object


// BigInt
let number = 900719925474099123n;
console.log(number);    		// 900719925474099123n
console.log(typeof number);     // bigint


// Symbol
let name_1 = Symbol("Aakash");
let name_2 = Symbol("Aakash");
console.log(name_1 == name_2);	// false
console.log(name_1);    		// Symbol("Aakash");
console.log(name_1.description);// Aakash
console.log(typeof name_1);    	// symbol


// Object
let Person = {
	firstName: "Aakash",
	lastName: "Pawar",
	age: 22,
	bool: true
}
console.log(Person);    		// {firstName: "Aakash", lastName: "Pawar", age: 22, bool: true}
console.log(typeof Person);     // object

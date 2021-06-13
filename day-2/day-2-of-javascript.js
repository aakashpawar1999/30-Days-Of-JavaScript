// Before ES6

// Updating Value
// This is OK
var box = "books";
box = "toys";

// This should not be allowed
// but works here without any error
var box = "books";
var box = "toys";



// After ES6

// Updating Value
// This is OK
let box = "books";
box = "toys";

// This is not allowed
// And will give an error
let box = "books";
let box = "toys";

// Value is constant
const box = "books";

// Value will not update
// Will show an error
box = "toys";

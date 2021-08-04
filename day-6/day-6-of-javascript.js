let x = 5;

x += 10;       // same as x = x + 10;
// x -= 10;    // same as x = x - 10;
// x *= 10;    // same as x = x * 10;
// x /= 10;    // same as x = x / 10;
// x %= 10;    // same as x = x % 10;

// Pre-Increment and Pre-Decrement
//       ++x            --x

// Post-Increment and Post-Decrement
//       x++            x--

// Use === instead of ==
console.log(5 === "5");     // false
// Use !== instead of !=
console.log(5 !== "5");     // true

// AND, OR, NOT
console.log((5 == 5) && (5 == 10));  // false
console.log((5 == 5) || (5 == 10));  // true
console.log(!(5 == 5));              // false
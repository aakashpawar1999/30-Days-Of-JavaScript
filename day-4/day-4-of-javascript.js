let sentence = "JavaScript is the world's most popular programming language.";
console.log(sentence);


// String Length
console.log(sentence.length);    // 60


// indexOf
console.log(sentence.indexOf("most"));    // 26

let sentence_2 = "JavaScript is the world's most popular programming language. (most)";
console.log(sentence_2.indexOf("most", 30));    // 62

console.log(sentence.indexOf("Most", 30));      // -1


// search
console.log(sentence.search("most"));    // 26


// charAt
console.log(sentence.charAt(0));    // J


// slice
console.log(sentence.slice(26, 30));    // most

console.log(sentence.slice(-34, -30));  // most

console.log(sentence.slice(26));        // most popular programming language.


// substring
console.log(sentence.substring(26, 30));    // most


// substr
console.log(sentence.substr(26, 4));    // most


// replace
console.log(sentence.replace("most", ""));    // JavaScript is the world's  popular programming language.


// toUpperCase
console.log(sentence.toUpperCase());    // JAVASCRIPT IS THE WORLD'S MOST POPULAR PROGRAMMING LANGUAGE.
// toLowerCase
console.log(sentence.toLowerCase());    // javascript is the world's most popular programming language.


// trim
let sentence_3 = "     JavaScript is the world's most popular programming language.     ";
console.log(sentence_3);         //     JavaScript is the world's most popular programming language.     
console.log(sentence_3.trim());  // JavaScript is the world's most popular programming language.

// trimStart
console.log(sentence_3.trimStart());  // JavaScript is the world's most popular programming language.     
// trimEnd
console.log(sentence_3.trimEnd()); 	  //      JavaScript is the world's most popular programming language.

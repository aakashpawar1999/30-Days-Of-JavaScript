// for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// for loop with break statement
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// for loop with continue statement
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// for in loop (on object)
const person = {
    fname: "John",
    lname: "Doe",
    age: 25,
};
for (let i in person) {
    console.log(person[i]);
}

// for of loop (on array)
const cars = ["BMW", "Volvo", "Mini"];
for (let i of cars) {
    console.log(i);
}

// for of loop (on string)
const str = "Aakash";
for (let i of str) {
    console.log(i);
}

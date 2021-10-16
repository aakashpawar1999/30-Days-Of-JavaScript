let a = 1;

// while loop will get executed until the condition is true
while (a <= 10) {
    console.log(a);
    a++;
}


let b = 10;

// statements in while block will not get executed
// because condition is false
while (b < 10) {
    console.log(b);
    b++;
}

// do while loop will execute atleast once
// even though the condition is false
// as condition is checked after the execution
do {
    console.log(b);
    b++;
} while (b < 10);
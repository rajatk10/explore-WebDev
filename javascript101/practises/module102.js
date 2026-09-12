console.log("Module 102 - Control Flow starting...")
console.log("********Uncomment the code to run it********")
// bun module102.js (run like this)
console.log("\n Module 1 - if else statement");
let name = "John";
//let age = 20;

function checkAdult() {
    let age = prompt("Enter your age : ");
    age = parseInt(age);
    if (isNaN(age)) {
        console.log("Invalid age");
        return false;
    }
    if (age < 18) {
        console.log("You are not an adult");
        return false;
    } else if (age >= 18 && age <= 65) {
        console.log("You are an adult");    
        return true;
    } else {
        console.log("You are a senior citizen");
        return true;
    }
}

// only if we use bun, for node we use readline
// readline is a module that allows us to read input from the console
//agen = readline.question("Enter your age : ");
// readline.question is a method that allows us to read input from the console
//agen = parseInt(agen);

//console.log(checkAdult());

console.log("\n Module 2 - switch statement");
function getDayName() {
    let day = prompt("Enter a day of the week : ");
    day = day.toLowerCase();
    console.log("Day is " + day);
    switch (day) {
        case "monday":
            return "Monday, it is the first day of the week";
        case "tuesday":
            return "Tuesday, it is the second day of the week";
        case "wednesday":
            return "Wednesday, it is the third day of the week";
        case "thursday":
            return "Thursday, it is the fourth day of the week";
        case "friday":
            return "Friday, it is the fifth day of the week";
        case "saturday":
            return "Saturday, it is the sixth day of the week";
        case "sunday":
            return "Sunday, it is the seventh day of the week";
        default:
            return "Invalid day";
    }
}
//console.log(getDayName());

console.log("\n Module 3 - for loop");
function printNumbers() {
    let result = "";
    for (let i = 0; i < 10; i++) {
        console.log(i);
        //for sameline print use result += i + " " ,later print result
        result += i + " ";
    }
    console.log(result);
}
//printNumbers();

console.log("\n Module 4 - while & do-while loop");
function printNumbersWhile() {
    let i = 0;
    while (i < 10) {
        console.log(i);
        i++;
    }
}
//printNumbersWhile();

function printNumbersDoWhile() {
    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 10);
}
//printNumbersDoWhile();

console.log("\n Module 5 - for each loop");
function printNumbersForEach() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.forEach(number => {
        console.log(number);
    });
}
//printNumbersForEach();

console.log("\n Module 6 - Try Catch Exception Handling");
class InvalidAgeError extends Error {}
class ZeroAgeError extends Error {}
function checkTryCatch() {
    try {
        let age = prompt("Enter your age :")
        age = parseInt(age);
        if (isNaN(age)) {
            throw new InvalidAgeError("Invalid age");
        }else if (age === 0) {
            throw new ZeroAgeError("Age is 0");
        }
        console.log("Your are  " + age + " years old");
    }
    // JS supports only one catch block, so we use multiple catch blocks to handle multiple errors
    catch (error) {
        if (error instanceof InvalidAgeError) {
            console.error("Invalid age");
        }else if (error instanceof ZeroAgeError) {
            console.error("Age is 0");
        }else if (error instanceof ReferenceError) {
            console.error("Reference error, did you ran it with node instead of bun?");
        }else {
            console.error("An unknown error occurred");
        }
    }
    finally {
        console.log("Thank you for running the Module 6 - Try Catch Exception Handling");
    }
}
//checkTryCatch();

console.log("\n Module 7 - Objects");
function createObject(person) {
    //const person = {}
    person.name = "John";
    person.age = 20;
    person.city = "New York";
    console.log(person);
}
// const person = {};
// createObject(person);
// console.log("Person name is " + person.name + " and age is " + person.age + " and city is " + person.city);

console.log("\n Module 7 - Function - Args")
function sumOfAll(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}
//console.log("Sum of 1, 2, 3, 4, 5 is " + sumOfAll(1, 2, 3, 4, 5));

function parentArguments() {
    console.log("Demonstrating inner function arguments");
    const a = 1;
    const b = 2;
    function add() {
        console.log("a is " + a + " and b is " + b + " and sum is " + (a + b));
    }
    add();
}
//parentArguments();
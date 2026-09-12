console.log("Module 101 - Fundamentals starting...")
console.log("********Uncomment the code to run it********")
console.log("Hello World");
// Basic Arithmetic Operations
console.log("\n Module 1 - Basic Arithmetic Operations");
console.log(5*7);
console.log(5+7);
console.log(5-7);
console.log(5/7);
console.log(5%7);
console.log(5**7);
console.log("\n Module 2 - Logical Operations");
console.log(5==7);
console.log(5!=7);
console.log(5!==7);
console.log(5>7);
console.log(5<7);
console.log("Prefer tripe === operator to prevent type coercion");
console.log("333 == \"333\" " + "vs "+ "333 === \"333\"");
console.log("333 == \"333\" is true because it converts 333 to string and compares it with \"333\"");
console.log("333 === \"333\" is false because it compares the type of 333 and \"333\"");

console.log("\n Module 3 - String Operations");
console.log("Hello" + "World");
console.log("Hello " + 5*7 + " World");
console.log("Hello" + " " + "World");
console.log("3" + 4 + 5 );
console.log("It becomes string concatenation of 345 because 3 is a string and 4 and 5 are numbers so it becomes 345");
console.log("\n Module 4 - Variables")
let name = "Test Variable";
//string and character both are same in javascript
let age = 20;
let isStudent = true;
console.log("JS is dynamic typed language so we can assign different types of values to the same variable");
name = 10;
console.log("Now name is a " + typeof(name) + " and value is " + name);
name = true;
console.log("Now name is a " + typeof(name) + " and value is " + name);
let x;
console.log("x is a " + typeof(x) + " and value is " + x);
x = null;
console.log("x is of type" + typeof(x) + " and value is " + x);
function variableScope() {
    let y = 10; //let is block scoped
    console.log("y is " + y);
    var z = 20; //var is function scoped - discouraged to use
    console.log("z is " + z);
}
variableScope();
//console.log("y is " + y);
//console.log("z is " + z);

console.log("\n Module 5 - Array Operations");
let arr1 = [1,2,3,4,5];
console.log(arr1);
console.log(arr1.length);
let arr2 = ["hello", "world", "javascript", "python", "java"];
console.log("Access element of array index "+ 0 + " is " + arr2[2]);
arr1.push(11)
console.log(`After pushing element to arr3 becomes : ${arr1}`)
console.log(arr1.pop());
console.log(arr1.join("-"));
console.log(arr1.reverse());


console.log("\n Module 6 - Object Operations");
let obj1 = {name: "John", age: 20, isStudent: true};
console.log(obj1);
console.log(obj1.name);
console.log(obj1.age);
console.log(obj1.isStudent);
console.log(obj1.name + " is " + obj1.age + " years old and is a student: " + obj1.isStudent);
console.log(`${obj1.name} is ${obj1.age} years old and is a student: ${obj1.isStudent}`);

console.log("\n Module 7 - Function Operations");
function add(a, b) {
    return a + b;
}
console.log("Addition of 5 and 7 is " + add(5, 7));


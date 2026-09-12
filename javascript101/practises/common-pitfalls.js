console.log("Common Pitfalls in JavaScript");
console.log("*********Uncomment the code to run the function*********");
function foo(x, condition) {
    if (condition) {
      console.log("x is " + x);
      //console.log(x);
      const x = 2;
      console.log("x is " + x);
      //console.log(z);
    }
  }
 
//ReferenceError: Cannot access 'x' before initialization because const is block scoped and is not hoisted
//foo(1, true);

console.log("\n Module 2 - Invalid Arrays Entries, Sparse Array");
function invalidArraysEntries() {
    let arr = [1, 2, 3, 4, 5];
    console.log("Array is " + arr + " , the length of the array is " + arr.length + 
        " add a new element to the array at index 10"
    );
    arr[10] = 10;
    console.log("Array is " + arr + " , the length of the array is " + arr.length);
    console.log("The element before index 10 and becomes undefined is " + arr[6] + ", also called as sparse array");
}
//invalidArraysEntries();

console.log("\n Module 3 - Object properties")
function objectProperties() {
    const server = {
        host : "0.0.0.0",
        port : 8080,
        url : "http://localhost:8080"
    };
    console.log("Server is object , host is " + server.host + " , port is " + server.port + " , url is " + server.url)
    server.host = "127.0.0.1";
    console.log("Mutation is allowed for the object properties");
    console.log("Server is object , host is " + server.host + " , port is " + server.port + " , url is " + server.url)
    console.log("Resassignment is not allowed for object example server = new")
    // server = {
    //     host : "127.2.2.1",
    // } TypeError: Assignment to constant variable.
}
objectProperties();
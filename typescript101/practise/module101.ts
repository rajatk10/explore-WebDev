console.log("Welcom to TypeScript 101");
console.log("***Uncomment the code to run it***");
console.log("Module 1 : Basic Types");
let str: string = "Hello, World!";
let num: number = 123;
let bool: boolean = true;
let arr: number[] = [1, 2, 3];
let obj: { name: string, age: number } = { name: "John", age: 20 };
let func: (a: number, b: number) => number = (a, b) => a + b;
console.log("Here is primitive types: ", str, num, bool, arr, obj, func);

console.log("Module 2 : Any Type");
let any: any = "Hello, World!";
let unknown: unknown = "Hello, World!";
let testNever: never
let testNull: null = null;
let testUndefined: undefined = undefined;
let id: symbol = Symbol("Hello, World!");

console.log("Here is any type: ", any);
console.log("Here is unknown type: ", unknown);
console.log("Here is null type: ", testNull);
console.log("Here is undefined type: ", testUndefined);
console.log("Here is symbol type: ", id);


console.log("Module 3 : Arithmetic Operators");
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(1, 2));
function isodd(a: number): boolean {
    if (a % 2 === 0) {
        console.log(`${a} is even`);
        return false;
    }
    console.log(`${a} is odd`);
    return true;
}
console.log(isodd(3));

console.log("Module 4: String Operations");
let str4: string = "Hello, World!";

function stringOperations(str: string): void {
    console.log("Length of the string: ", str.length);
    console.log("Uppercase of the string: ", str.toUpperCase());
    console.log("Lowercase of the string: ", str.toLowerCase());
    console.log("Substring of the string: ", str.substring(7, 12));
    console.log("Replace of the string: ", str.replace("World", "TypeScript"));
    console.log("String chartAt :", str.charAt(7));
    console.log("String indexOf :", str.indexOf("W"));
}
//stringOperations(str4);

console.log("Module 5: Array Operations");
function arrayOperations(arr: number[]): void {
    console.log("Array elements: ", arr);
    // var item: any;
    // for (item in arr) {
    //     console.log("array element is : ", item);
    // }
    console.log("Array length: ", arr.length);
    console.log("Reverse of the array: ", arr.reverse());
    console.log("sorted of the array: ", arr.sort());
    console.log("Sliced of the array: ", arr.slice(2, 5));
    console.log("Filtered Array : ", arr.filter((item) => item > 50));
    console.log("Mapped Array : ", arr.map((item) => item * 2));

}
//let arr1 : number[] = Array(4) - empty array of size 4 using Array Object
let arr5: number[] = [0,10,21,32,43,54,65]
//arrayOperations(arr5);

console.log("Module 6: Anynomous Functions");
let addAnonymous = function(a: number, b: number): number {
    return a + b;
}
console.log("Anonymous Function addition of a=10 and b=20 : ", addAnonymous(10, 20));

let multiplyLambda = (a: number, b: number): number => a * b;
console.log("Lambda Function multiplication of a=10 and b=20 : ", multiplyLambda(10, 20));
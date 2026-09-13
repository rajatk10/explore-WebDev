console.log("Module 102 - Classes and Interfaces");
console.log("***Uncomment the code to run it***");

console.log("Module 1 : Classes");
class Greeting {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    var: string = "Hello"; //class variable
    //let testVar: string = "Test"; //let and const creates block scope and are incorrect to use here
    static PI: Number = 3.14; //static variable
    protected psurname: string = "Doe";
    private pemail: string = "john.doe@example.com";
    greet():void {
        console.log(`Hello, ${this.name}!`);
    }
    sayHello(): void {
        console.log(`Hello There, ${this.psurname}! we have your contact as : ${this.pemail}`);
    }

}
console.log("Static Property inside class PI : ", Greeting.PI);
const greeting = new Greeting("John");
//greeting.greet();
greeting.sayHello();
console.log("Accessing name from outside the class : ", greeting.name);
//console.log(greeting.psurname); protected cannot be accessed outside the class
//console.log(greeting.pemail); private cannot be accessed outside the class


console.log("Module 2 : Interfaces");
interface IPerson {
    name: string;
    age: number;
    getFullName(): string;
}
let obj1: IPerson = {
    name: "John",
    age: 20,
    getFullName(): string {
        return `${this.name} is ${this.age} years old`;
    }
}
//console.log(obj1.getFullName());

class Employee implements IPerson {
    name: string;
    age: number;
    department: string;
    constructor(name: string, age: number, department: string) {
        this.name = name;
        this.age = age;
        this.department = department;
    }
    getFullName(): string {
        return `${this.name} is ${this.age} years old`;
    }
    getEmployeeDetails(): string {
        return `${this.name} is ${this.age} years old and works in ${this.department}`;
    }
}
const emp: Employee = new Employee("John", 20, "IT");
//console.log("Employee Class is implemented by Interface IPerson : ", emp.getEmployeeDetails());

class Manager extends Employee {
    constructor(name: string, age: number, department: string) {
        super(name, age, department);
    }
    getManagerDetails(): string {
        return `${this.name} is ${this.age} years old and works in ${this.department} as a manager`;
    }
}
const mgr: Manager = new Manager("Jason Mamoa", 30, "IT");
//console.log("Manager Class Extends Employee Class : ", mgr.getManagerDetails());

console.log("Module 3 : Enums");
enum Direction {
    Up, //0 - starts and automatically increments by 1
    Down,
    Left, //2
    Right, //3
}
// console.log("Direction Enum : ", Direction.Up); //0
// console.log("Direction Enum : ", Direction.Down); //1
// console.log("Direction Enum : ", Direction.Left); //2
// console.log("Direction Enum : ", Direction.Right); //3
// console.log("Direction Enum : ", Direction[0]); //Up
// console.log("Direction Enum : ", Direction[1]); //Down
// console.log("Direction Enum : ", Direction[2]); //Left
// console.log("Direction Enum : ", Direction[3]); //Right

//console.log("You are probably going ", Direction[Direction.Up] + " direction");

let a : Direction = Direction.Up;
function checkEnum(a: Direction): void {
    if (a === Direction.Up) {
        console.log("You are going up, cheers");
    }
}
//checkEnum(a);

console.log("Module 4 : Generics");
console.log("Generics are used to create reusable components that can work with different types.");
/*
Example here it requires three definition for same function with different types
function firstElement(arr: number[]): number {
    return arr[0];
}
function firstElement(arr: string[]): string {
    return arr[0];
}
function firstElement(arr: boolean[]): boolean {
    return arr[0];
}
    with generics, 
*/
function firstElement<T>(arr: T[]): T | undefined {
    //union type to handle the case of empty array
    return arr[0];
}
const firstNumber = firstElement([1, 2, 3]);
const firstString = firstElement(["a", "b", "c"]);
const firstBoolean = firstElement([true, false]);
// console.log("Generic Function First Number : ", firstNumber);
// console.log("First String : ", firstString);
// console.log("First Boolean : ", firstBoolean);

function sayHelloNamespace(): void {
    console.log("Hello from sayHello function, outside of the namespace");
}
console.log("Module 5: Namespace");
namespace MyFirstNamespace {
    export function sayHello(): void {
        var name: string = "John"; //local variable in the namespace, global space is not polluted
        console.log("Hello " + name +"!" + " from MyFirstNamespace, sayHello function is exported");
    }
}
//console.log("Namespace is way of segragating the code into logical groups, so global space is not polluted");
//MyFirstNamespace.sayHello();
//sayHelloNamespace();
console.log("Module 103 - OOPs Concepts starting...")
console.log("********Uncomment the code to run it********")
console.log("\n Module 1 - Classes")

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
        return "Instantiated Person object";
    }
}

//const person = new Person("John"); age becomes undefined
const person = new Person("John", 30);
//console.log(person.sayHello());

console.log("Module 2 - Class Static Methods")
class Person2 {
    static count = 0;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        Person2.count++;
    }
    static getCount() {
        return Person2.count;
    }
}

const person2 = new Person2("John", 30);
const person3 = new Person2("Jane", 25);
//console.log(Person2.getCount());

console.log("Module 3 - Class Inheritance")
class Employee extends Person2 {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
const employee = new Employee("John", 30, 10000);
console.log("Name is " + employee.name + " and Employee salary: " + employee.getSalary());
class Manager extends Employee {
    constructor(name, age, salary, designation) {
        super(name, age, salary);
        this.designation = designation;
    }
}
const manager = new Manager("Jane", 25, 20000, "Manager");
console.log("Name is " + manager.name + " and Manager designation: " + manager.designation);

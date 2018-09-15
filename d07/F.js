"use strict";

class Person {
    constructor(opt) {
        this.age = opt.age;
        this.name = opt.name;
    }

    info() {
        return `The person is called ${this.name} and is ${this.age} years old`;
    }
}
    
const person = new Person( {age: 44, name: 'Tom' });
console.log(person.info());

class Student extends Person {
    constructor(opt) {
        super(opt);
        this.gpa = opt.gpa;
    }

    info() {
        return `The student is called ${this.name} and is ${this.age} years old. He has an overall GPA of ${this.gpa} in the university.`;
    }
}

const student = new Student( {age: 44, name: 'Tom', gpa: 3.75 });
console.log(student.info());
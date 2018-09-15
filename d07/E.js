class Person{

    constructor(options){
        this.age = options.age;
        this.name = options.name;
    }

    info(){
        return `The person is called ${this.name} and is ${this.age} years old`;
    }

}

const person = new Person({age:44,name:'Tom'});
person.info();
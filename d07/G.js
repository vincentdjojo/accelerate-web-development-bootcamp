"use strict";

class FlyingAnimal {
    fly() {
        console.log(`${this.type} is flying.`);
    }
}

class SwimmingAnimal {
    swim() {
        console.log(`${this.type} is swimming.`);
    }
}

class Bat extends FlyingAnimal {
    constructor() {
        super();
        this.type = 'Bat';
    }

    feed() {
        console.log(`${this.type} is feeding milk.`);
    }
}

class Fish extends SwimmingAnimal {
    constructor() {
        super();
        this.type = 'Fish';
    }
    
    lay() {
        console.log(`${this.type} is laying eggs.`);
    }
}

class Whale extends SwimmingAnimal {
    constructor() {
        super();
        this.type = 'Whale';
    }
    
    feed() {
        console.log(`${this.type} is feeding milk.`);
    }
}

class Bird extends FlyingAnimal {
    constructor() {
        super();
        this.type = 'Bird';
    }
    
    lay() {
        console.log(`${this.type} is laying eggs.`);
    }
}

var bat = new Bat();
bat.fly();
bat.feed();

var fish = new Fish();
fish.swim();
fish.lay();

var whale = new Whale();
whale.swim();
whale.feed();

var bird = new Bird();
bird.fly();
bird.lay();

/* 

Bat : A Bat can fly and feed milk
Fish : A Fish can swim and lay eggs
Whale : A Whale can swim and feed milk
Bird : A Bird can fly and lay eggs

*/

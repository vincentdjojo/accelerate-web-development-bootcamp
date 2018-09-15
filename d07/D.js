
class Monster{

    constructor(option){
        this.name = option.name;
        this.health = 100;
    }

    wound(healthWounded){
        this.health -= Math.min(this.health, healthWounded);
        if(this.health == 0 ){
            console.log("Monster dead");
        }
    }
}

function hero(monster){
    let healthWounded = Math.floor(Math.random() * (20-5 +1) + 5) // Generate Number
    monster.wound(healthWounded);
}
var monster = new Monster({name:"cookieMonster"});

while(monster.health > 0){
    hero(monster);
}
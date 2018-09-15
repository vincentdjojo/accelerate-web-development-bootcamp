/*
'use strict';

// class Player{
//     constructor(name,health){
//         this.name = name;
//         this.health = health;
//     }
//     attack(opponent){
//         opponent.health -= 10;
//     }
// }

function Player(name,health){
    this.name = name;
    this.health = health;
}

Player.prototype.attack = function(opponent){
    opponent.health -= 10;
}

var player1 = new Player('Ada',300);
var player2 = new Player('Eric',250);

var attackingPlayer, defendingPlayer;

while(player1.health>0 && player2.health>0 ){ 
    [attackingPlayer,defendingPlayer] =
        (Math.random()>0.5)?
        [player1,player2]:
        [player2,player1];

    attackingPlayer.attack(defendingPlayer);
}
console.log(player1)
console.log(player2)
*/
// part 2

function Player(name,health){
    this.name = name;
    this.health = health;
}

Player.prototype.attack = function(opponent){
    opponent.health -= 10;
    if(opponent.health<0)
        opponent.health = 0;
}

Player.prototype.heal = function(){
    this.health += 5;
}

var player1 = new Player('Ada',300);
var player2 = new Player('Eric',250);

var attackingPlayer, defendingPlayer;

var combo = 0;
var previousAttacker = null;

while(player1.health>0 && player2.health>0 ){
    [attackingPlayer,defendingPlayer] =
        (Math.random()>0.5)?
        [player1,player2]:
        [player2,player1];
        
    attackingPlayer.attack(defendingPlayer);

    if(attackingPlayer === previousAttacker){
        combo++;
        if(combo===3){
            attackingPlayer.heal();
            combo = 0;
            console.log(`${attackingPlayer.name} is healing!`) 
        }
    } else {
        combo = 0;
    }
    previousAttacker = attackingPlayer;
}
console.log(player1)
console.log(player2)

var a =1,b=2;
console.log(`The value of a is ${a}, and the value of b is ${b}`)





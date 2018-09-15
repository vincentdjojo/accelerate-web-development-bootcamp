
// Declare/Define a Class
function Gambler(cash, bet) {
    this.cash = cash;
    this.bet = bet;
}

Gambler.prototype.lose = function() {
    this.cash -= Math.min(this.cash, this.bet);
}


// Use the class(with the "new" keyword), initialize an instance
var gambler1 = new Gambler(100, 40);
var gambler2 = new Gambler(100, 30);

var outOfCashOrder = [];
var round = 0;

// Business Logic for this problem
function play(name, currentGambler, probability) {
    if (currentGambler.cash > 0) {
        if (Math.random() < probability) {
            currentGambler.lose();
            console.log('Gambler ' + name + ' lost, $' + currentGambler.cash + ' remaining');
            if (currentGambler.cash <= 0) {
                console.log('Gambler ' + name + ' ran out of cash');
                outOfCashOrder.push(name);
            }
        }
    }
}

function casino() {
    play('One', gambler1, 0.6);
    play('Two', gambler2, 0.4);
}

// Stage 
console.log('Casino starts');
while (gambler1.cash > 0 || gambler2.cash > 0) {
    round++;

    console.log('---- Round ' + round + ' ----');
    casino();
}

console.log('The ran of cash order are', outOfCashOrder);

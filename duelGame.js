// create Parent card class
class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        console.log(`An attack has occured ${this.name} attacks ${target.name}`)
        target.res -= this.power;
    }
}
class Effect extends Card {
    constructor(name, cost, text, stat, mag) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }
    play( target ) {
        if( target instanceof Unit ) {
        // implement card text here
            
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
// Make an instance of "Red Belt Ninja"
const redBeltNinja = new Unit("Red Belt", 3, 3, 4);
// Make an instance of "Black Belt Ninja"
const blackBeltNinja = new Unit("Black Belt", 4, 5, 4);
// Make an instance of "Hard Alogrithm" and play it on Red Belt Ninja
const hardAlgorithm = new Effect("Hard Algo", 3, "Increases target power", "power", 3);
console.log(redBeltNinja);
console.log(blackBeltNinja);
redBeltNinja.attack(blackBeltNinja);
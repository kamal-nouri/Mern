class Ninja{
    constructor(name){
        this.name=name;
        this.health=0;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log(`the name of the ninja is ${this.name}`);
    }
    showStats(){
        console.log(`the name of the ninja is ${this.name} and the health is ${this.health} and the strength is ${this.strength}`);
    }
    drinkSake(){
        this.health+=10;
        console.log(`the health of the sensie is ${this.health}`);
    }
}
// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health=200;
        this.strength=10;
        this.speed=10;
        this.wisdom=10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months")
    }
    

}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
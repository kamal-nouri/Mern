class Card {
  constructor(name, cost) {
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
  show() {
    console.log("res: " + this.res, "power: " + this.power);
  }
  attack(target) {
    target.res -= this.power;
    console.log(`the res now is ${target.res}`);
  }
}
class Effect extends Card {
  constructor(name, cost, text, stat, mag) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.mag = mag;
  }
  play(target) {
    if (target instanceof Unit) {
      if (this.stat == "resilience") {
        target.res += this.mag;
      } else if (this.stat == "power") {
        target.power += this.mag;
      }
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}
const Red_Belt_Ninja = new Unit("Red_Belt_Ninja", 3, 3, 4);
const black_Belt_Ninja = new Unit("black_Belt_Ninja", 4, 5, 4);
const Unhandled_Promise_Rejection = new Effect(
  "Unhandled Promise Rejection",
  1,
  "increase target's resilience by 3",
  "resilience",
  -2
);
const Hard_Algorithim = new Effect(
  "Hard_Algorithim",
  2,
  "increase target's resilience by 3",
  "resilience",
  3
);
const Pair_Programming = new Effect(
  "Pair_Programming",
  3,
  "increase target's power by 2",
  "power",
  2
);
// Unhandled_Promise_Rejection.play(Red_Belt_Ninja);
// Red_Belt_Ninja.show();
// Hard_Algorithim.play(Red_Belt_Ninja);
// Red_Belt_Ninja.show();
// Pair_Programming.play(black_Belt_Ninja);
// black_Belt_Ninja.show();
Unhandled_Promise_Rejection.play(Hard_Algorithim);


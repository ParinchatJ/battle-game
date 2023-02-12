// create base status for every charactor
class BaseStatus {
  name = "P1";
  basePosition = "Main";
  hp = 100;
  mana = 10; // step -1
  atk = 10; // step -10 when attack
  died = false;
  item = "Your hero is not attack!";

  // create character
  constructor(playerName) {
    this.name = playerName;
  }

  // attack
  attack(target) {
    this.randomItem(this.hp);
    if (this.mana > 0) {
      target.hp -= this.atk;
      this.mana--;
      if (target.hp <= 0) {
        target.die();
      }
    }
  }

  // random item
  randomItem() {
    let listItem = [
      "sword",
      "gloves",
      "AmuletOfLongevity",
      "medallionOfTroy",
      "knightSPlate",
    ];
    // atk +2 , atk +1 , hp +30 , hp +5 , hp +6
    let ran = Math.floor(Math.random() * 5);

    if (listItem[ran] == "sword") {
      this.atk += 2;
    } else if (listItem[ran] == "gloves") {
      this.atk += 1;
    } else if (listItem[ran] == "AmuletOfLongevity") {
      this.hp += 30;
    } else if (listItem[ran] == "medallionOfTroy") {
      this.hp += 5;
    } else if (listItem[ran] == "knightSPlate") {
      this.hp += 6;
    }
    return (this.item = listItem[ran]);
  }

  // died
  die() {
    this.died = true;
  }

  showStatus() {
    if (this.died) {
      return this.name + " has been died";
    }
    return `Name = ${this.name}\nPosition = ${this.basePosition}\nhp = ${this.hp}\nmana = ${this.mana}\natk = ${this.atk}\nitem = ${this.item}`;
  }
}

// position set status charactor
class Tank extends BaseStatus {
  basePosition = "Tank";
  hp = 200;
  atk = 15;
}

class Mage extends BaseStatus {
  basePosition = "Mage";
  hp = 90;
  atk = 22;
}

class Carry extends BaseStatus {
  basePosition = "Carry";
  atk = 22;
}

class Assassin extends BaseStatus {
  basePosition = "Assassin";
  hp = 90;
  atk = 25;
}

class Fighter extends BaseStatus {
  basePosition = "Fighter";
  hp = 120;
}

// PLAY!
// create charactor
let a = new Mage("Player1");
let b = new Fighter("Player2");
let c = new Tank("Player3");

// fight!
a.attack(b);
a.attack(b);
a.attack(b);
a.attack(b);
a.attack(b);
a.attack(c);
b.attack(a);
b.attack(a);
b.attack(a);
b.attack(a);
b.attack(c);
b.attack(c);
c.attack(a);
c.attack(a);
c.attack(b);
c.attack(b);
c.attack(b);
c.attack(b);
c.attack(b);

// result to the log
console.log(a.showStatus());
console.log(b.showStatus());
console.log(c.showStatus());

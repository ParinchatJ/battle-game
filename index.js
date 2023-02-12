// create base status for every charactor
class BaseStatus {
    name = "P1";
    basePosition = "Main";
    hp = 100;
    mana = 10; // step -1
    atk = 10; // step -10 when attack
    died = false;
    item = [];
  
    // create character
    constructor(playerName) {
      this.name = playerName;
    }
  
    // attack
    attack(target) {
      if (this.mana > 0) {
        target.hp -= this.atk;
        this.mana--;
        if (target.hp <= 0) {
          target.die();
        }
      }
    }
  
    // กำหนด die จะเป็นยังไง
    die() {
      this.died = true;
    }
  
    randomItem() {
      //
    }
  
    showStatus() {
      if (this.died) {
        return this.name + " has been died";
      }
      return `${this.name}\nPosition = ${this.baseClass}\nhp = ${this.hp}\nap = ${this.ap}\natk = ${this.atk}`;
    }
  }
  
  // position set status charactor
  
  class Tank extends BaseStatus {
    basePosition = "Tank";
    hp = 200;
    atk = 15;
  }
  
  // PLAY!
  // create charactor
  let a = new BaseStatus("A");
  let b = new BaseStatus("B");
  let c = new Tank("C");
  
  // fight!              อยากกำหนดเป็น turn
  a.attack(b);
  a.attack(b);
  a.attack(b);
  a.attack(b);
  a.attack(b);
  a.attack(c);
  a.attack(c);
  
  // result to the log
  console.log(a.showStatus());
  console.log(b.showStatus());
  console.log(c.showStatus());
  
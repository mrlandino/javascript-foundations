var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name, statues = []){
    this.name = name;
    this.statues = statues;
  }
  gazeAtVictim(victim){
    if (this.statues.length < 3){
      var newStatue = new Statue(victim.name);
      this.statues.push(newStatue);
    } else if (this.statues.length === 3){
      var newStatue = new Statue(victim.name);
      this.statues.push(newStatue);
      var freedPerson = new Person (this.statues[0].name);
      this.statues.shift();
      freedPerson.mood = "relieved";
      return freedPerson;
    }
  }
}


module.exports = Medusa;

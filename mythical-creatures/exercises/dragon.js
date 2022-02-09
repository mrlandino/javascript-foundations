class Dragon {
  constructor(name, rider, hungry = true, timesEaten = 0) {
    this.name = name;
    this.rider = rider;
    this.greet = function greet() {
      return (`Hi, ${this.rider}!`);
    }
    this.hungry = hungry;
    this.timesEaten = timesEaten;
  }
  eat() {
    if (this.timesEaten <= 2) {
      this.timesEaten = this.timesEaten + 1;
    }
    if (this.timesEaten >= 3) {
      this.hungry = false;
    }
  }
}
// learnings: add another property to store information in a variable to reference later via this.<new property>
//not sure why I need another if statement instead of an else of if else statement?????

module.exports = Dragon;

class Hobbit {
  constructor(name, age = 0, adult = false, old = false, hasRing = false) {
    this.name = name.name;
    this.age = age;
    this.adult = adult;
    this.old = old;
    this.hasRing = hasRing;
  }
  celebrateBirthday() {
    this.age = this.age + 1;
    if (this.age > 32) {
      this.adult = true;
    }
    if (this.age > 100) {
        this.old = true;
    }
  }
  getRing(){
    if (this.name === "Frodo") {
      this.hasRing = true;
      return `Here is the ring!`;
    } else {
      return `You can't have it!`;
    }
  }
}



module.exports = Hobbit;

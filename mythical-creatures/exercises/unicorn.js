class Unicorn {
  constructor(name, color = "white") {
    this.name = name;
    this.color = color;
    this.isWhite = function isWhite () {
      if (this.color === "white") {
        return true;
      } else {
        return false;
      }
    }
    this.says = function says(says) {
      return(`**;* ${says} *;**`);
    }
  }
}

//learnings: you can set a default parameter with the parameter = whatever you want the default to be.
// there can be nothing in between the constructor and parameters. 
module.exports = Unicorn;

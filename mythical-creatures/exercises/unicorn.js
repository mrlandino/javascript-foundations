class Unicorn {
  constructor(name, color = "white") {
    this.name = name;
    this.color = color;
    this.says = function says(says) {
      return(`**;* ${says} *;**`);
    }
  }
  isWhite () {
    if (this.color === "white") {
      return true;
    } else {
      return false;
    }
  }
}

//learnings: you can set a default parameter with the parameter = whatever you want the default to be.
// there can be nothing in between the constructor and parameters.
//"functions" or methods should live outside of the constructor method
module.exports = Unicorn;

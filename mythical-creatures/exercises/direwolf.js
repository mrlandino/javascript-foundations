class Direwolf{
  constructor(name, home, size){
    this.name = name;
    this.home = home || "Beyond the Wall";
    this.size = size || "Massive";
    this.starksToProtect = [];
    this.numberToProtect = 0;
    this.huntsWhiteWalkers = true;
  }

  protect(stark){
    if (stark.location === this.home && this.numberToProtect < 2){
      this.starksToProtect.push(stark);
      this.numberToProtect ++;
      stark.safe = true;
    }
    if (this.numberToProtect > 0){
      this.huntsWhiteWalkers = false;
    }
  }

  leave(stark){
    //console.log(this.starksToProtect);

    for (var i = 0; i < this.starksToProtect.length; i++){
      if (stark.name === this.starksToProtect[i].name){
        stark.safe = false;
        this.starksToProtect.splice(i);
      }
    }

  }
}

module.exports = Direwolf;

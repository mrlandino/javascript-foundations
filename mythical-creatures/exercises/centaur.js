class Centaur{
  constructor({name, type}){
    this.name = name;
    this.breed = type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.getCranky = 0;
  }

  shootBow(){
    if (this.cranky === true || !this.standing){
      return "NO!"
    } else {
      this.getCranky = this.getCranky + 1;
      if (this.getCranky >= 3){
        this.cranky = true;
      }
      return "Twang!!!"
    }
  }

  run(){
    if (this.cranky === true || !this.standing){
      return "NO!"
    } else {
      this.getCranky = this.getCranky + 1;
      if (this.getCranky >= 3){
        this.cranky = true;
      }
      return "Clop clop clop clop!!!"
    }
  }

  sleep(){
    if (!this.standing){
      this.cranky = false;
      return "ZZZZ";
    }
    return "NO!";
  }

  layDown(){
    this.standing = false;
    this.layingDown = true;
  }

  standUp(){
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion(){
    if (!this.layingDown){
      this.cranky = false;
    } else {
      return "Not while I'm laying down!";
    }
  }
}

module.exports = Centaur;

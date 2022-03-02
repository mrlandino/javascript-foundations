class Sphinx {
  constructor(){
    this.riddles = [];
  }

  collectRiddle(riddle){
    if (this.riddles.length < 3){
      this.riddles.push(riddle);
      console.log('1)', this.riddles);
    }
    if (this.riddles.length === 3){
      this.riddles.shift();
      this.riddles.push(riddle);
      console.log('2)', this.riddles);
    }
  }
}

module.exports = Sphinx;

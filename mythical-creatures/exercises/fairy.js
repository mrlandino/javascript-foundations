class Fairy{
  constructor(name){
    this.name = name;
    this.dust = 10;
    this.clothes = {
      dresses: ['Iris'],
    }
  }

  receiveBelief(){
    this.dust++
  }

  believe(){
    this.dust = this.dust + 10;
  }

  makeDresses(dresses){
    for (var i = 0; i < dresses.length; i++){
      this.clothes.dresses.push(dresses[i]);
    }
  }
}

module.exports = Fairy;

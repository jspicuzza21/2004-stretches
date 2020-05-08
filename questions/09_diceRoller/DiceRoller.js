// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  //YOUR CODE
  constructor(numSides, numDice) {
    this.history=[]
    this.numSides=numSides
    this.numDice=numDice

    if (typeof(numSides)!=='number'|| typeof(numDice)!=='number' || numSides <1 || numDice<1){
      throw('Please enter valid numbers')
    }
  }

  roll(){
    let rolls=[]
    
    for (let i=1; i<=this.numDice; i++){
      let dieRoll=Math.floor(Math.random()*this.numSides+1)
      rolls.push(dieRoll)
    }
    this.history.push(rolls)
    return rolls
  }
}

module.exports = { DiceRoller };
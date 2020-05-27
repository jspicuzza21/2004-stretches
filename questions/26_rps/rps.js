//You are writing the game rock-paper-scissors.
/* 
RULES:
Scissors defeat Paper
Paper defeats Rock
Rock defeats Scissors 
*/

class RPS {
  //YOUR CODE HERE
  constructor(...players){
    this.scoreBoard={}
    players.forEach(player=>this.scoreBoard[player]=0)
  }

  play(...moves){
    const playerNames=Object.keys(this.scoreBoard);
    for (let i=0; i<moves.length; i++){
      let currentPlayerMove=moves[i];
      for (let j=0; j<moves.length; j++){
        
        if (currentPlayerMove==='rock'){
          if(moves[j]==='scissors'){
            const player=playerNames[i];
            this.scoreBoard[player]+=1
          }
        }
        if (currentPlayerMove==='paper'){
          if(moves[j]==='rock'){
            const player=playerNames[i];
            this.scoreBoard[player]+=1
          }
        }
        if (currentPlayerMove==='scissors'){
          if (moves[j]==='rock'){
            const player=playerNames[i];
            this.scoreBoard[player]+=1
          }
        }
      }
    } 
  }

  winner(){
    let win=''
    let highScore=0;
    for (let key in this.scoreBoard){
      if (this.scoreBoard[key]>highScore){
       highScore=this.scoreBoard[key];
       win=key;
      }
    }
    return `The victor is ${win} with ${highScore} points.`
  }
}

module.exports = { RPS };

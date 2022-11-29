class WarCardGame{
  constructor(){
    this.playerOne = 'Player One'
    this.playerTwo = 'Player Two'
    this.playerOneScore = []
    this.playerTwoScore = []
    this.playerOneGameScore = []
    this.playerTwoGameScore = []
    this.deckCount = 52
    this.deck = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13]

  }

  cardValue(){
    let value = Math.floor(Math.random() * 13)
    return value + 1
  }

  getUniqueCard(playerTurn){
    let index = this.deck.indexOf(playerTurn)
    if(index > -1){
      this.deck.splice(index, 1)
    }else if(index === -1 && this.deck.length > 0){
      playerTurn = this.cardValue()
      // recursive function to retest if card is unique
      this.getUniqueCard(playerTurn)
    }
  }

  deal(){
    let playerOneTurn = this.cardValue()
    let playerTwoTurn = this.cardValue()
    this.deckCount -= 2

    this.getUniqueCard(playerOneTurn)
    this.getUniqueCard(playerTwoTurn)

    if(playerOneTurn > playerTwoTurn){
      this.playerOneScore.push(playerOneTurn)
      this.playerTwoScore.push(playerTwoTurn)
      this.playerOneGameScore.push(1)
      console.log(`${this.playerOne} wins this round! Card values of [${playerOneTurn}] to [${playerTwoTurn}]. ${this.playerOne} is awarded 1 pt!`)
    }else if(playerOneTurn < playerTwoTurn){
      this.playerOneScore.push(playerOneTurn)
      this.playerTwoScore.push(playerTwoTurn)
      this.playerTwoGameScore.push(1)
      console.log(`${this.playerTwo} wins this round! Card values of [${playerTwoTurn}] to [${playerOneTurn}]. ${this.playerTwo} is awarded 1 pt!`)
    }else{
      console.log(`${this.playerOne} and ${this.playerTwo} tie this round! [${playerTwoTurn}] to [${playerOneTurn}]. Neither player is awarded a point!`)
    }

  }
    
  gameOver(){
    console.log('GAME OVER!')
    let playerOneTotal = this.playerOneScore.reduce((a,b) => a + b, 0)
    let playerTwoTotal = this.playerTwoScore.reduce((a,b) => a + b, 0)

    if(playerOneTotal > playerTwoTotal){
      console.log(`${this.playerOne} wins! Their Total Game Score is: [${this.playerOneGameScore.length}] & their Total Card Value score is: [${playerOneTotal}] compared to their opponent's score of [${playerTwoTotal}]!`)
      
    }else{
      console.log(`${this.playerTwo} wins! Their Total Game Score is: [${this.playerTwoGameScore.length}] & their Total Card Value score is: [${playerTwoTotal}] compared to their opponent's score of [${playerOneTotal}]!`)
    }
  }

  start(){
    while(this.deckCount > 0){
      this.deal()
    }
    this.gameOver()

  }
}

let newGame = new WarCardGame()
newGame.start()


let cardValue = function(){
  let value = Math.floor(Math.random() * 13)
  return value + 1
}




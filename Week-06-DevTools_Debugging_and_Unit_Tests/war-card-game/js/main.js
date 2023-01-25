class WarCardGame{
  constructor(){
    this.playerOne = 'Player One'
    this.playerTwo = 'Player Two'
    this.playerOneScore = []
    this.playerTwoScore = []
    this.playerOneGameScore = []
    this.playerTwoGameScore = []
    this.deckCount = 52

  }

  cardValue(){
    let value = Math.floor(Math.random() * 13)
    return value + 1
  }

  deal(){
    let playerOneTurn = this.cardValue()
    let playerTwoTurn = this.cardValue()
    this.deckCount -= 2

    if(playerOneTurn > playerTwoTurn){
      this.playerOneScore.push(playerOneTurn)
      this.playerTwoScore.push(playerTwoTurn)
      this.playerOneGameScore.push(1)
      console.log(`${this.playerOne} wins this round! Card values of ${playerOneTurn} to ${playerTwoTurn}. ${this.playerOne} is awarded 1 pt!`)
    }else if(playerOneTurn < playerTwoTurn){
      this.playerOneScore.push(playerOneTurn)
      this.playerTwoScore.push(playerTwoTurn)
      this.playerTwoGameScore.push(1)
      console.log(`${this.playerTwo} wins this round! Card values of ${playerTwoTurn} to ${playerOneTurn}. ${this.playerTwo} is awarded 1 pt!`)
    }else{
      console.log(`${this.playerOne} and ${this.playerTwo} tie this round! ${playerTwoTurn} to ${playerOneTurn}. Neither player is awarded a point!`)
    }

  }
    
  gameOver(){
    console.log('GAME OVER!')
    let playerOneTotal = this.playerOneScore.reduce((a,b) => a + b, 0)
    let playerTwoTotal = this.playerTwoScore.reduce((a,b) => a + b, 0)

    if(playerOneTotal > playerTwoTotal){
      console.log(`${this.playerOne} wins! Their Total Game Score is: ${this.playerOneGameScore.length} & their Total Card Value score is: ${playerOneTotal} to ${playerTwoTotal}`)
      
    }else{
      console.log(`${this.playerTwo} wins! Their Total Game Score is: ${this.playerTwoGameScore.length} & their Total Card Value score is: ${playerTwoTotal} to ${playerOneTotal}`)
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



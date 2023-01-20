class Trail {
  constructor(name, difficultyRating){
    this.name = name
    this.difficultyRating = difficultyRating
  }

  describe(){
    return `${this.name} has a difficulty rating of ${this.difficultyRating}.`
  }
}

class Park {
  constructor(name){
    this.name = name
    this.trails = []
  }

  addTrail(trail){
    if(trail instanceof Trail){
      this.trails.push(trail)
    }else{
      throw new Error(`You can only add an instance of Trail. Arguement is not a trail: ${trail}`)
    }
  }

  describe(){
    return `${this.name} has ${this.trails.length} trails.`
  }
}

class Menu{
  constructor(){
    this.parks = []
    this.selectedPark = null
  }

  start(){
    let selection = this.showMainMenuOptions()
    while(selection != 0){
      switch (selection){
        case '1':
          this.createPark()
          break
        case '2':
          this.viewPark()
          break
        case '3':
          this.deletePark()
          break
        case '4':
          this.displayParks()
          break
        default:
          selection = 0
          break
      }
      selection = this.showMainMenuOptions()
    }
    alert('Goodbye!')
  }

  showMainMenuOptions(){
    return prompt(`
    0) exit
    1) create new Park
    2) view Park
    3) delete Park
    4) display all Parks
    `)
  }

  showParkMenuOptions(parkInfo){
    return prompt(`
    0) back
    1) create trail
    2) delete trail
    -------------------
    ${parkInfo}
    `)
  }

  displayParks(){
    let parkString = ''
    for(let i = 0; i < this.parks.length; i++){
      parkString += i + ') ' + this.parks[i].name + '\n'
    }
    alert(parkString)
  }

  createPark(){
    let name = prompt('Enter name for new Park:')
    this.parks.push(new Park(name))
  }

  viewPark(){
    let index = prompt('Enter the index of the Park you wish to view:')
    if(index > -1 && index < this.parks.length){
      this.selectedPark = this.parks[index]
      let description = 'Park name: ' + this.selectedPark.name + '\n'

      for(let i = 0; i < this.selectedPark.trails.length; i++){
        description += i + ') ' + this.selectedPark.trails[i].name + ' - ' + this.selectedPark.trails[i].difficultyRating + '\n'
      }

      let selection = this.showParkMenuOptions(description)
      switch (selection){
        case '1':
          this.createPlayer()
          break
        case '2':
          this.deletePlayer()
          break
      }
    }
  }

  createPlayer(){
    let name = prompt('Enter name for new trail:')
    let difficultyRating = prompt('Enter the difficulty rating for new trail:')
    this.selectedPark.trails.push(new Trail(name, difficultyRating))
  }

  deletePlayer(){
    let index = prompt('Enter the index of the trail you wish to delete:')
    if(index > -1 && index < this.selectedPark.trails.length){
      this.selectedPark.trails.splice(index, 1)
    }
  }
}

let menu = new Menu()
menu.start()
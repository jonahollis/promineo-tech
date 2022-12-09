for (i = 0; (i < 100) || (points >= 290); i++){
    if (points % 2 === 0){
      points += 5
    } else{
      points += 3
    }
    if(points == 125){
      points -= 25
    }
  }
  
  
  
  var points = 0;
  var pointsReset = false; 
  
  for (i = 0; (i < 100) && (points < 290); i++){
  
    if (points === 290){
      i += 100
    }else if (points === 125){
      points = 25
    }else if (points === 0){
      points += 5
    }else if (points % 2 === 0){
      points += 5
    } else{
      points += 3
    }
  
  }
  
  
  var points = 0;
  var pointsReset = false; 
  
  for (i = 0; (i < 100) && (points < 290); i++){
  
    if (points === 290){
      i += 100
    }else if (points === 125 && !pointsReset){
      points = 25
      pointsReset = true
    }else if (points === 0){
      points += 5
    }else if (points % 2 === 0){
      points += 5
    } else{
      points += 3
    }
      console.log('Turns: ' + i + ' Score: ' + points)
  }
  
/*   -----------------------------------
  open class work
  -----------------------------------
  
  100 turns
  if number is even + 5 pts
  if number is odd + 3 pts
  if score == 125, then - 25 pts (just once)
  game ends on 100th turn or you reach > 290 pts, whichever first */
  
  
  
  var points = 0;
  var pointsReset = false; 
  
  //write your code here
  
  for (i = 0; (i < 100) && (points < 290); i++){
  
    if (points === 125 && !pointsReset){
      points = 25
      pointsReset = true
    }else{
      if (points % 2 === 0){
        points += 5
      }else if (points % 2 !== 0) {
        points += 3
      }   
    }
    console.log('Turns: ' + i + ' Score: ' + points)
  }
  
  

  
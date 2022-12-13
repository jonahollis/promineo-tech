/* 1. 
Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array 
Do not use numbers to reference the last element, find it programmatically, 
ages[7] – ages[0] is not allowed!
*/

// 1a
let arrAges = [3, 9, 23, 64, 2, 8, 28, 93]

console.log( arrAges[arrAges.length-1] - arrAges[0] )

// 1b -Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
arrAges.push(30)

console.log( arrAges[arrAges.length-1] - arrAges[0] )

// 1c - Use a loop to iterate through the array and calculate the average age. 

function average (arr){
    let sum = 0
    for(i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / i
}

// --------------------------------------------------

/* 2. 
Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’. */
let arrNames = ['Sam','Tommy','Tim','Sally','Buck','Bob']

// 2a - Use a loop to iterate through the array and calculate the average number of letters per name. 
let sumNames = 0
arrNames.forEach( x => {
    console.log(x.length)
    sumNames += x.length

})
console.log(sumNames)
console.log(sumNames / arrNames.length)

// 2b - Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. arrToString(arrNames)  */

function arrToString(arr){
    let strNames = ''
    for(i = 0; i < arr.length ; i++){
//        strNames += arr[i].toString() + ' '
        strNames += arr[i] + ' '
    }
    console.log(strNames)
}

arrToString(arrNames)

/* 3.
How do you access the last element of any array? */

let grads = ['Sarah','Brock','Greg','Gerty']

function gradList(graduates){
    //write your code here
    graduates.push('Mary','Steven','Eddie')
    graduates.sort().reverse()
    return graduates
    
}

console.log(gradList(grads));





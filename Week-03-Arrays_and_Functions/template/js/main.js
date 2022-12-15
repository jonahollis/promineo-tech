// 1. 
// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array 
// Do not use numbers to reference the last element, find it programmatically, 
// ages[7] – ages[0] is not allowed!


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

//  2. 
//  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’. 
let arrNames = ['Sam','Tommy','Tim','Sally','Buck','Bob']

// 2a - Use a loop to iterate through the array and calculate the average number of letters per name. 
let sumNames = 0
arrNames.forEach( x => {
    console.log(x.length)
    sumNames += x.length

})
console.log(sumNames)
console.log(sumNames / arrNames.length)

//  2b - Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. arrToString(arrNames)  

function arrToString(arr){
    let strNames = ''
    for(i = 0; i < arr.length ; i++){
//        strNames += arr[i].toString() + ' '
        strNames += arr[i] + ' '
    }
    console.log(strNames)
}

arrToString(arrNames)

// 3.
// How do you access the last element of any array?

console.log(arrNames[arrNames.length-1])

// 4.
// How do you access the first element of any array?

console.log(arrNames[0])

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array

let nameLengths = arrNames.map(x => x.length)
console.log(nameLengths)

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

let sumNameLengths = nameLengths.reduce( (a,b) => a + b,0)
console.log(sumNameLengths)

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function wordsConcat (str, x){
    let newStr = ''
    for(i = 0; i <= x; i++){
        newStr += str
    }
    console.log(newStr)
}

wordsConcat('Hello', 5)

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name.
// The full name should be the first and the last name separated by a space.

function fullName(first, last){
    console.log(`${first} ${last}`)
}
fullName('john','smith')


// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function greaterThan100 (arr){
    let sum = arr.reduce( (acc,currV) => acc + currV, 0)
    if(sum > 100){
        console.log(true)
    }else{
        console.log(false)
    }
}

greaterThan100([10])

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.


// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.


// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.


// 13. Create a function of your own that solves a problem. 
// In comments, write what the function does and why you created it.

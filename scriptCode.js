// console.log('Hello')

// const myConstVar = 5


// let foo = 93
// console.log(foo)

// foo = "my string"
// console.log(foo)

// let foodArray = ['pizza', 'pasta', 'salad']
// console.log(foodArray)

// let foodItem = foodArray[1]
// console.log("foodItem:", foodItem)

// let objectVariable = {
//     key: 'value',
//     foods: foodArray

// }

// console.log(objectVariable)

// let foods = objectVariable['foods']
// console.log('foods:', foods)   

// function AddTwoNumbers(num1, num2){
//     let sum = num1 + num2
//     return sum
// }

// let mySum = AddTwoNumbers(77, 777)
// console.log('mySum:', mySum)

console.log('document:', document)  

let breakfastElement = document.getElementById('breakfast')
console.log(breakfastElement)

function breakfastClick(){
    console.log('breakfastelement was clicked')
    let breakfastFoodsDiv = document.getElementById('breakfastFoods')
    breakfastFoodsDiv.style.display = 'flex'
    let lunchFoodsDiv = document.getElementById('lunchFoods')   
    lunchFoodsDiv.style.display = 'none'
}

breakfastElement.addEventListener('click', () => breakfastClick())

let lunchElement = document.getElementById('lunch')
console.log(lunchElement)

function lunchClick(){
    console.log('lunchElement was clicked')
    let lunchFoodsDiv = document.getElementById('lunchFoods')
    lunchFoodsDiv.style.display = 'flex'
    let breakfastFoodsDiv = document.getElementById('breakfastFoods')
    breakfastFoodsDiv.style.display = 'none'
}

lunchElement.addEventListener('click', () => lunchClick())




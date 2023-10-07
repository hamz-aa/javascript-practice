// function decleration
function logHello1(){
    console.log("hello1")
}

logHello1()

function returnHello(){
    return 'Hello'
}

console.log(returnHello())

function isEven(num){
    return num % 2 === 0
}

console.log(isEven(4))
console.log(isEven(5))

// function expression
const logHello2 = function(){
    console.log('hello2')
}

logHello2()

// arrow function 
const logHello3 = () => {
    console.log('hello3')
}

logHello3()

const isOdd1 = num => {         // with one parameter you can remove the paranthesis
    return num % 2 === 1;
}

console.log(isOdd1(3))

const isOdd2 = num => num % 2 === 1;   // you can also remove the return if function only have one line of code

console.log(isOdd2(4))

// hoisting

hello4()           //it only works in case of function decleration 
                               // but will not work for arrow function or function expression
function hello4(){
    console.log('hello4')
}

// hello5()         // it gives error

// const hello5 = function(){
//     console.log('hello')
// }

// nested functions

const app = () => {
    const myfun = function(){               // nested function can only be called inside the 
        console.log('nested function')      // function in which they are created
    }

    const add = (num1, num2) => num1 + num2

    console.log(add(2,3))
    console.log('inside app')
    myfun()
}

app()
// myfun()    // gives error 

// default parameter 

// function addTwo(a,b){
//     if (typeof b === 'undefined'){         // old way
//         b = 0
//     }
//     return a + b
// }

function addTwo(a,b = 0){
    return a + b               // new way
}

console.log(addTwo(4))      // passing only one argument

// rest parameters 

function myFunc(a, b, ...c){
    console.log(a)
    console.log(b)
    console.log(c)
}

myFunc(1,2,3,4,5,6,7)

// param destructuring 

const obj6 = {
    firstName: 'hamza',
    gender: 'male'
}

function printDetails({firstName, gender}){      // destructuring object in parameters
    console.log(firstName)
    console.log(gender)
}

printDetails(obj6)

// callback functions 

function myFunc1(callback){
    callback()
    console.log('inside my func 1')
}

function myFunc2(){
    console.log('inside my func 2')
}

myFunc1(myFunc2)          // higher order function

// function returning function 

function myFunc3(){
    console.log('inside my func 3')

    function hello(){
        console.log('inside funct 3 inside hello')
    }

    // return hello(){                                       // can also return this way
    //     console.log('inside funct 3 inside hello')
    // };

    return hello
}

const hello6 = myFunc3()

hello6()
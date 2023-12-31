"use strict";        // stops you from making basic mistakes

console.log('hello world');

var first_name = 'Hamza';  // snake case
var firstName = 'Hamza';   // camel case
console.log(firstName)

// lastName = 'Ahmed'      // an error is displayed because of use strict mode

let lastName = 'Ahmed';
lastName = 'Ahmed';

const pi = 3.14;

console.log(firstName[2])           // string indexing
console.log(firstName.length)

let word = '  hamza  ';

let newWord = word.trim();             // string is immutable so this will not change the original string
console.log(newWord);                  // rather it will return a new string
console.log(newWord.toUpperCase());   
console.log(newWord.toLowerCase());
console.log(newWord.slice(0,4));

console.log(typeof firstName)

let age = 22;
console.log(typeof (age + ""))    // convert number to string

let myStr = '22';
console.log(typeof +myStr)          // convert string to number
console.log(typeof Number(myStr))   // convert string to number

let userName;
console.log(userName)  // undefined

userName = null
console.log(typeof userName)

let myNumber = BigInt(123145435471234564874654111512) // or myNumber = 123456789n
console.log(typeof myNumber)

let myAge = 8;
let drink = myAge >= 5 ? 'coffee' : 'milk';       // ternary operator
console.log(drink)

let num = 100;
let total = (num * (num + 1)) / 2;   // while loop alternative
console.log(total)                   // using arithmetic series to print sum of ten numbers  

let i = 0;            // use let for loop because var can also be accessed outside the scope
for(;i <= 5; i++){           
    console.log(i);            // still works
}

let nums = [1,2,3,4,5]
console.log(typeof nums)  // returns object
console.log(Array.isArray(nums))  // to check if it is an array

let arr1 = ['item1', 'item2', 'item5']
// let arr2 = arr1      // copies reference not original array values   
// let arr2 = arr1.slice(0)   // use this instead to clone array
// let arr2 = [].concat(arr1)  // or use this but ... 
let arr2 = [...arr1]  // use spread operator
// let arr2 = arr1.slice(0).concat('item3', 'item4')  // to clone and store new values in array
// let arr2 = [...arr1, 'item3', 'item4']   // or use this

const fruits = ['apple', 'mango']     // use const to declare arrays
// fruits = ['banana']   // gives error, can't reinitialize or redeclare const array

for(let f of fruits){    // for of loop
    console.log(f)       // used on iterables  
}

for(let index in fruits){    // for in loop
    console.log(index)       // this loop gives index  
}

let [myVar1, myVar2] = arr1    // array destructuring
console.log(myVar1, myVar2)

// let [myVar1, , myVar2] = arr1    // skipping second value
// console.log(myVar1, myVar2)

// let [myVar1, ...myVar2] = arr1    // storing rest of values in array
// console.log(myVar1, myVar2)

const person = {
    name: 'hamza',
    age: 21,
    "person hobbies": ['guitar', 'football', 'games']  // if you want to add space use inverted commas
}
// person.person hobbies    // wrong 
// person['person hobbies']  // will work

for(let key in person){        // here key gives index rather than value
    console.log(person.key)   // wrong
    console.log(person[key])  // right
}

for(let key of Object.keys(person)){
    console.log(person[key])
}

console.log(Object.keys(person))   // returns an array of keys

const newArr = [...'abc']  // creates an array with three elements a,b,c
console.log(newArr)         // it requires an iterable  

const obj1 = {
    key1: 'val1',
    key2: 'val2'
}
const obj2 = {
    key1: 'val5',
    key3: 'val3',
    key4: 'val4'
}

const newObj = {...obj1, ...obj2, key5:'val5'}    // same key is replaced by the later one
console.log(newObj)

const newObj1 = {...'abc'}         // creates an object with index as keys
console.log(newObj1)

let {key3:val1, ...var2} = obj2         // object destructuring
console.log(val1, var2)

// the (||) operator only moves to its right if its left is false else it returns its left value
// while the (&&) operator moves to its right only if its left is true else it returns its left value 

console.log(false || 'hamza')   //hamza
console.log(true || 'hamza')    // true
console.log(false && 'hamza')   // false
console.log(true && 'hamza')    // hamza

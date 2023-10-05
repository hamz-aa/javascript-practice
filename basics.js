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
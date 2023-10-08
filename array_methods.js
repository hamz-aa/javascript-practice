// for each 

const numbers = [2, 4, 5, 8]

numbers.forEach((element, index) => {
    console.log(element, index)
});

const func = (element, index) => {
    console.log(element, index)
}

numbers.forEach(func)         // will also work

// map method

const square = numbers.map((num) => {    // you can also use a second parameter, the index
    return num * num;                   // map always returns a new array
})

console.log(square)

// filter method

const oddNum = numbers.filter((num) => {
    return num % 2 === 1                  // filter must always have a boolean condition in return statement
})

console.log(oddNum)

// reduce method
                                                               // numbers = [2, 4, 5, 8]                         
const sum = numbers.reduce((accumulator, currVal) => {         // acc contains first val, i.e : 2
    console.log('\nacc : ', accumulator)                       // curr contains sec val, i.e : 4 
    console.log('curr : ', currVal)                // in sec iteration acc contain the return val, i.e : 6 
    return accumulator + currVal                    // while curr increments to the next val, i.e : 5 and so on
})

console.log('\nsum : ', sum)

        
const newSum = numbers.reduce((accumulator, currVal) => {
    console.log('\nacc : ', accumulator)                
    console.log('curr : ', currVal)                
    return accumulator + currVal                    
}, 0)    // you can also pass a second parameter
         // in this case acc will contain the passed parameter, i.e : 0
         // and curr will have the first val, i.e : 2
         // the rest is the same as acc will contain the returned value and curr will have the next value
         

// sort method

unordered_numbers = [9, 2, 25, 13, 19, 11]
unordered_numbers.sort()         // the sort method changes the original array instead of returning a new one
console.log(unordered_numbers)    // this returns a very weird and unexpected result

    // the result is based on the fact that javascript treats these numbers as strings
    // and it compares the ASCII values of these strings
    // only the first values are compared, 
    // i.e : for '1', ASCII val is 49
    // while for '141', ASCII val is also 49


// so the alternate way to sort a numeric array is:

unordered_numbers.sort((a, b) => a - b)      // we pass a callback to the sort method
console.log(unordered_numbers)

    // so how this works is : 
    // if a-b ---> positive it means b < a
    // else a < b
    // for instance, 9-2 = 7 so 9 > 2
    // but 2 - 25 = -23 so 25 > 2 
    // also write a - b for ascending sort
    // and b - a for descending sort


// find method

const findElement = numbers.find((num) => {
    return num === 5                              // returns the first element that matches the condition
})

console.log(findElement)

// every method

const everyElement = numbers.every((num) => num%2===0);   // it returns true only if all elements meet 
                                                          // the given condition. if even one element is false it returns false               
console.log(everyElement)


// some method

const someElement = numbers.some((num) => num%2===0)   // opposite of every
                                                       // if even one condition it true, it returns true
console.log(someElement)


// fill method

// const myArray = new Array(10).fill(0)       // initializes an array with 0
// console.log(myArray)

const myArray = [1,2,3,4,5,6,7,8]
myArray.fill(0, 2, 5)                // fills array with 0 starting from 2 index and end before 5 index
console.log(myArray)


// splice method

myArray.splice(1, 2, 4)      // splice(start, delete, insert)
console.log(myArray)

// set data structure

const numbers = new Set([1,2,3]);   // set is iterable
                                   // you can only put an iterable inside the set
                                   // iterable is something that the for of loop can work on

console.log(numbers)

const numbers2 = new Set([1,2,3,3]);   // set does not allow duplicate values

    // set also doesnot allows index based access
    // so numbers[0] returns undefined
    // also order of elements is not guaranteed

const numbers3 = new Set()
numbers3.add(1)             // we can also insert this way
numbers3.add(2)
numbers3.add(2)          // cannot insert duplicate
numbers3.add([3,4])          
numbers3.add([3,4])      // this will work because these are two different arrays
                        // irrespective of having same elements
                    
numbers3.has(1)          // returns boolean

for(let num of numbers){
    console.log(num)
}

    // we use set for unique values
const myArr = [1,2,4,4,5,6,6]
const uniqueElements = new Set(myArr)
console.log(uniqueElements)


// map object

// it stores data in ordered fashion
const person = new Map()     // map can have key value pairs just like an object
                            // but unlike an object whose keys are only strings or symbols,
                            // a map can even have numbers or arrays as keys

person.set('firstName', 'Hamza')
person.set('age', 21)
person.set(1, 1)

console.log(person)

person.get('age')    // access values using keys
person.get(1)

person.keys()     // access all keys of a map

for (let p of person){      // a map is also an iterable
    console.log(p)       // it returns an array of key, values
}

for(let [key, val] of person){  // since it returns an array, you can also destructure it
    console.log(key, val)
}


// cloning object using object.assign

const obj = {
    key1: 'val1',
    key2: 'val2'
}

const obj2 = Object.assign({}, obj);

const obj3 = {...obj};      // you can also use the spread operator


// optional chaining in objects 

const user = {
    name : 'hamza',
    address: {houseNum: 1234}
}

// console.log(user.address.houseNum)       // if address doesn't have any value it returns an error
console.log(user?.address?.houseNum)       // this can be avoided by using ? before the dot operator
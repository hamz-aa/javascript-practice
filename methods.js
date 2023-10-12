
// methods
// functions inside object

const person = {
    name : 'hamza',
    age : 8,
    about : function(){
        console.log(`person name is ${this.name} and age is ${this.age}`)
                                // use this to use keys inside its own object
        console.log(this)
                     // this is an object that is same as the objects name
                    // i.e : this = person in the given example
    }                              
}                             

person.about();

function aboutInfo(){
    console.log(`name is ${this.name} and age is ${this.age}`)
}
                             // very useful, create function once and call it in multiple objects
const person1 = {
    name : 'ali',
    age : 15,
    about : aboutInfo
}
const person2 = {
    name : 'danyal',
    age : 18,
    about : aboutInfo
}

person1.about();
person2.about();


// this and window

console.log(this)      // gives javascript's window object
console.log(window)      // gives same output as above

function myFunc(){
    console.log(this)        // here this refers to the object just like above examples
}                           // the object here however is the global one called window                    

window.myFunc();     // all functions and variables are inside window object

function hello(){
    console.log('hello')
}

// call method

hello.call()           // can also call function this way

const user1 = {
    name : 'hamza',
    age : 21,
    about : function(hobby){
        console.log(this.name, this.age, hobby)
    }
}
const user2 = {
    name : 'ashir',
    age : 18
}

user1.about('reading')    // just normal way to call a method from object
user1.about.call('reading')       // gives undefined
user1.about.call(user1, 'reading')   // gives the expected output
user1.about.call(user2, 'reading')   // an object can be passed to the call method which can overwrite its original values


// function about(hobby){
//     console.log(this.name, this.age, hobby)
// }

// const user1 = {
//     name : 'hamza',
//     age : 21,
// }
// const user2 = {
//     name : 'ashir',
//     age : 18
// }

// about.call(user1, 'reading')           // can also do this way
// about.call(user2, 'reading')


// apply method

user1.about.apply(user2, ['reading']);
                // apply method works the same as call
                // the only difference is that now you can pass an array of the arguments


// bind method

const func = user1.about.bind(user1, 'reading')
func()              // the bind method returns a function


// things not to do 

const myFunction = user1.about      // never store the reference of a function inside a variable this way
myFunction()         // returns undefined because this keyword now refers to window object rather than user1


// arrow functions

const user3 = {
    name : 'hamza',
    age : 21,
    about : () => {
        console.log(this)
        console.log(this.name, this.age)
    }    
}

user3.about()       // arrow functions do not have a this of their own
                    // their this is one level above the object they're in
                    // in our case that one level above is the window object


// short way

const user4 = {
    name : 'hamza',
    age : 21,
    about(){                   // can also create functions this way
        console.log(this)
        console.log(this.name, this.age)
    }    
}

user4.about()      // works fine
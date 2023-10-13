
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



// creating object using object.create

const obj1 = {
    key1: 'val1',
    key2: 'val2'
}

const obj2 = Object.create(obj1);

obj2.key3 = 'val3'
console.log(obj2.key3)
console.log(obj2.key1)
                // when created with object.create() method, if an object does not have a key val pair
                // just like obj2 does not have key1, then it searches in the other object that is passed
                // in the parenthesis i.e : obj1

console.log(obj2.__proto__)
                // we can see in concole that there is proto inside obj2
                // it basically links obj2 with obj1


// creating object with function inside

// const human = {
//     name : 'hamza',
//     email : 'abc@gmail.com',
//     age : 21,
//     about : function(){
//         console.log(`name is ${this.name} and age is ${this.age}`)
//     },
//     is18 : function(){
//         return this.age >= 18
//     }
// }

        // consider the above human object
        // suppose we have to create another user, what will we do,
        // we will repeat all the steps again
        // but this can be minimized through a function

// function createHuman(name, email, age){
//     const human = {}    
//     human.name = name
//     human.age = age
//     human.email = email
//     human.about = function(){
//         console.log(`name is ${this.name} and age is ${this.age}`)
//     },
//     human.is18 = function(){
//         return this.age >= 18
//     }

//     return human;
// }

// const human1 = createHuman('hamza', 'abc@gmail.com', 21)
// const human2 = createHuman('ahsan', 'def@gmail.com', 18)

        // this way we can create multiple objects easily but
        // there's a problem here
        // everytime we call createHuman function, it will also create the 
        // about and is18 function for every object
        // this can be reduced if these functions are created only once and called
        // everytime when they are required rather than creating them again and again
        // for every object


const humanMethods = {
    about : function(){
        console.log(`name is ${this.name} and age is ${this.age}`)
    },
    is18 : function(){
        return this.age >= 18
    }
}

// function createHuman(name, email, age){
//     const human = {}    
//     human.name = name
//     human.age = age
//     human.email = email
//     human.about = humanMethods.about,
//     human.is18 = humanMethods.is18

//     return human;
// }                       // this also works and is better aproach

            // but there is an even better aproach

// function createHuman(name, email, age){
//     const human = Object.create(humanMethods)    
//     human.name = name
//     human.age = age
//     human.email = email

//     return human;
// }
        // using the object.create that we learned earlier
        // if we call a key that is not present in our object then
        // it will search for that key in the object that was passed inside 
        // the parenthesis, this is done using the __proto__ reference


// const human1 = createHuman('hamza', 'abc@gmail.com', 21)
// const human2 = createHuman('ahsan', 'def@gmail.com', 18)

// human1.about()
// console.log(human2.is18())

        // there is another way

function hello3(){
    console.log('hello')
}
        // in js, functions work as if function + object
        
console.log(hello3.name)     // returns name of function

hello3.myOwnProperty = 'unique'

console.log(hello3.myOwnProperty)
                    // we can add our own properties to functions just like objects

console.log(hello3.prototype)
                // functions have empty space for objects inside of them which are
                // refered through prototype keyword
                // only functions provide prototype property

hello3.prototype.abc = 'abc';
hello3.prototype.sing = function(){
    console.log('la la la')
}
console.log(hello3.prototype)      // we can add key val pairs to our prototype object
                                  // in this way              



//  now we have another aproach to the above createHuman issue
// what if instead of creating a new object of humanMethods, 
// why not utilize the object that is already present inside the function

// function createHuman(name, email, age){
//     const human = Object.create(createHuman.prototype)       // we can pass prototype here to link    
//     human.name = name                                        // it with __proto__   
//     human.age = age
//     human.email = email

//     return human;
// }

// createHuman.prototype.about = function(){                        // these methods will be added to the 
//     console.log(`name is ${this.name} and age is ${this.age}`)      // prototype object
// }
// createHuman.prototype.is18 = function(){
//     return this.age >= 18
// }

// const human1 = createHuman('hamza', 'abc@gmail.com', 21)
// const human2 = createHuman('ahsan', 'def@gmail.com', 18)

// human1.about()
// console.log(human2.is18())


// now there is another way too
// using the new keyword

function createUser(name, age){
    this.name = name;
    this.age = age;
}

createUser.prototype.about = function(){
    console.log(this.name, this.age);
}

const user6 = new createUser('hamza', 21)
user6.about()
            // now what the new keyword does is that first it initializes an empty object
            // that can be refered through this keyword i.e : this = {}
            // then it returns that new object and we store it in user6
            // it also links __proto__ to prototype that we were doing manually
            // in the last example
            // i.e : the about key that we created in prototype is automatically added to __proto__


// changing the previous example through new keyword

function CreateHuman(name, email, age){   //this is now called a constructor function so we capitalize the first letter to let the developers know that they should call it using a new keyword
    this.name = name              // so we remove the object.create
    this.age = age              // the this object is created and updated with these values
    this.email = email          // no need to return as this is automatically returned because of new keyword
}

CreateHuman.prototype.about = function(){                        // these methods will be added to the 
    console.log(`name is ${this.name} and age is ${this.age}`)      // prototype object
}
CreateHuman.prototype.is18 = function(){
    return this.age >= 18
}

const human1 = new CreateHuman('hamza', 'abc@gmail.com', 21)   // the this object is returned and stored in
const human2 = new CreateHuman('ahsan', 'def@gmail.com', 18)   // these human variables     

human1.about()
console.log(human2.is18())
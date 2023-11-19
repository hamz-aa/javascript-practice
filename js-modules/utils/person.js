
export default class Person {
    constructor(firstName, age){
        this.firstName = firstName;
        this.age = age;
    }

    info(){
        console.log(this.firstName, this.age);
    }
}

// we can mark export as default. Now we don't need to use curly braces in app.js
// Point to remember is that we can only use one default export in a module. if we mark another
// variable/function/class as default we will get error


// this below code gives error because we have already used default export in above class
// and therefore cannot use it below here.
// export default class Person2 {
//     constructor(firstName, age){
//         this.firstName = firstName;
//         this.age = age;
//     }

//     info(){
//         console.log(this.firstName, this.age);
//     }
// }


// we can have a second export that is not default
export class Person2 {
    constructor(firstName, age){
        this.firstName = firstName;
        this.age = age;
    }

    info(){
        console.log(this.firstName, this.age);
    }
}

// class keyword
// in js classes are fake
// because internally they work the same as the code we previously wrote

class CreateHuman {
    constructor(name, email, age){
        this.name = name;
        this.age = age;
        this.email = email;    
    }

    about(){
        console.log(`name is ${this.name} and age is ${this.age}`)
    }

    is18(){
        return this.age >= 18
    }
}


const human1 = new CreateHuman('hamza', 'abc@gmail.com', 21)   // the this object is returned and stored in
const human2 = new CreateHuman('ahsan', 'def@gmail.com', 18)   // these human variables     

human1.about()
console.log(human2.is18())
console.log(human1.name)


// inheritence

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating`)
    }

    isCute(){
        console.log(age <= 3)
    }
}

class Dog extends Animal {

}

const dog1 = new Dog('tom', 2);
console.log(dog1)
dog1.eat();

// super keyword

class Cat extends Animal {
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed
    }

    run(){
        console.log(`${this.name} is running at ${this.speed}kmph`)
    }

    eat(){
        console.log(`my cat ${this.name} is eating`)
    }
}

const cat1 = new Cat('billi', 2, 22);
console.log(cat1);
cat1.run();
cat1.eat();


// getters and setters

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get full(){
        return `${this.name} ${this.age}`
    }

    // setInfo(name, age){
    //     this.name = name;
    //     this.age = age;
    // }

    set full(fullInfo){
        const [name, age] = fullInfo.split(' ')
            this.name = name;
            this.age = Number(age);
    }
}

const person1 = new Person('hamza', 21)
console.log(person1.full)    // no need for parenthesis after using the get keyword

person1.full = 'ali 21';   // now you can change properties this way too
console.log(person1)


// static methods

class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    static userInfo(){
        console.log('this is static function')
    }

    static desc = 'description'

    get full(){
        return `${this.name} ${this.age}`
    }

    set full(fullInfo){
        const [name, age] = fullInfo.split(' ')
            this.name = name;
            this.age = Number(age);
    }    
}

const user1 = new User('hamza', 21);
// user1.userInfo()      // gives error because static method can only be called upon classes directly
User.userInfo();
console.log(User.desc);
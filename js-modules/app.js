import { firstName as fName, firstName } from "./utils/fname.js";
import { age } from "./utils/age.js";
import Person, { Person2 } from "./utils/person.js";
// import p from "./utils/person.js";


console.log(fName, age);

const person = new Person(fName, age);
person.info();

// for modular programming in js:
// 1) use type='module' in script tag. Now 'defer' keyword can be removed.
// 2) use 'export' keyword to export variables/functions from modules.
// 3) use 'import' statement at the top of your main file to import the 
//    variables/functions. Type name of variable/function in curly braces and type the
//    path in commas after the from keyword
// 4) you can use 'as' keyword to give the variable/function a name of your own. 
// 5) if the export is marked as 'default' then you can remove the curly braces.
//    There cannot be more than one default in a module.
// 6) the default export can be named as anything. Just like we named it as p
//    in the above import in line 4.
// 7) the exports that are not default are called 'named' exports.
// 8) we can write both default and named exports together as we did in line 3.
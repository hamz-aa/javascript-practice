
console.log(window.document);     // html representation
console.dir(window.document);     // javaScript representation
console.log(document)            // same as window.document


// getElementById

console.log(document.getElementById('main-heading'))   // for html representation
console.dir(document.getElementById('main-heading'))    // actual representation
console.log(typeof document.getElementById('main-heading'))    // it actually returns an object

const mainHeading1 = document.getElementById('main-heading');   // better to store in const as it is an object
console.log(mainHeading1);


// querySelector
const mainHeading2 = document.querySelector('#main-heading');     
console.log(mainHeading2);

const navItem = document.querySelector('.nav-item')
console.log(navItem);     //  returns only the first item that matches

const allNavItems = document.querySelectorAll('.nav-item');
console.log(allNavItems);      // returns node list of all items that have the same class


// change text 

const mainHeading3 = document.getElementById('main-heading')
console.log(mainHeading3.textContent)       // returns text inside the tag
// mainHeading3.textContent = 'changing values'       // can also change text


// textContent vs innerText
console.log(mainHeading3.textContent);     // textContent reveals all the text that is inside the tags
console.log(mainHeading3.innerText);       // innerText only reveals the text that is displayed on the browser
                                            // i.e: it doesnot display hidden text


// styling elements 

// const mainHeading4 = document.querySelector('div.headline h2');
// console.log(mainHeading4.style)      // style is also an object and can be manipulated
// mainHeading4.style.color = 'blue';
// mainHeading4.style.backgroundColor = 'white';       // while giving style attributes that have hyphen (-) between
//                                                     // them, use camel case notation as hyphen cannot be used 
//                                                     // between names in js
// mainHeading4.style.background-color;  // gives error


// get and set attribute

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://google.com'); 


// get multiple elements

const navItems = document.getElementsByClassName('nav-item');
console.log(navItems)   // returns HTMLcollection which is an array like object
console.log(navItems[0])   // since it is an array like object we can do indexing
console.log(Array.isArray(navItems))  // returns false

const navItems2 = document.querySelectorAll('.nav-item');
console.log(navItems2)  // returns nodeList which is also an array like object
console.log(navItems2[0])

// cannot use forEach method on HTMLCollection
// array-like-objects can be indexed and can have length property

let anchor = document.getElementsByTagName('a');

// for(let i = 0; i < anchor.length; i++){
//     const navItem = anchor[i];
//     navItem.style.backgroundColor = '#fff';
//     navItem.style.color = 'green';
//     navItem.style.fontWeight = 'bold'
// }

// for(let navItem of anchor){
//     const navItem = anchor[i];
//     navItem.style.backgroundColor = '#fff';
//     navItem.style.color = 'green';
//     navItem.style.fontWeight = 'bold'
// }

// anchor.forEach(navItem => {                    // returns error
//     navItem.style.backgroundColor = '#fff';
//     navItem.style.color = 'green';
//     navItem.style.fontWeight = 'bold'
// });

// anchor = Array.from(anchor);        // convert HTMLCollection into array
// anchor.forEach(navItem => {                    // now it works
//     navItem.style.backgroundColor = '#fff';
//     navItem.style.color = 'green';
//     navItem.style.fontWeight = 'bold'
// });

console.log(navItems2)    // querySelecter returns a nodeList
                // you can use normal for loop, for of and even forEach method on a node list
// navItems2 = Array.from(navItems2);
                // you can also convert a nodeList into an array


// innerHTML 

const headline = document.querySelector('.headline');
console.log(headline.innerHTML);
// headline.innerHTML = '<h1>inner html changed</h1>';    // can change innerHTML of elements



// accessing DOM through root node

const rootNode = document.getRootNode();
console.log(rootNode);
console.log(rootNode.childNodes);   // accessing child nodes

const htmlElementNode = rootNode.childNodes[1];   
console.log(htmlElementNode);

console.log(htmlElementNode.childNodes);

const headElementNode = htmlElementNode.childNodes[0];
console.log(headElementNode)

const parentNode = headElementNode.parentNode;   // can also access parent nodes
console.log(parentNode);

console.log(headElementNode.nextSibling.nextSibling)  // can acess next siblings as well

console.log(headElementNode.nextElementSibling);    // can access next element by ignoring text nodes

const head = document.querySelector('head');
const title = head.querySelector('title');      // can use querySelector inside other tag names
console.log(title);

console.log(htmlElementNode.children) // accessing child nodes without accessing text nodes


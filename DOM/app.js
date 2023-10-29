
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


// Class List 

const sectionTodo = document.querySelector('.todo-section');
console.log(sectionTodo.classList)

sectionTodo.classList.add('bg-dark');   // giving classes to elements
sectionTodo.classList.remove('bg-dark');    // removing classes
console.log(sectionTodo.classList.contains('bg-dark'));    // checking if class exist in an element

sectionTodo.classList.toggle('bg-dark');   // if a class exists it will remove the class from classList
                                          // if not then it will add that class to classList
sectionTodo.classList.toggle('bg-dark');


// adding new html elements to page 

const todoList = document.querySelector('.todo-list');

// todoList.innerHTML += '<li>New Todo</li>';   // do not use this method to add elements to html as
                                                // it can cause performance issues

const newTodoItem = document.createElement('li');  // use this method to create and add elements

// const newTodoText = document.createTextNode('Teach Students');
// newTodoItem.append(newTodoText);              // long way of creating and adding text
 
newTodoItem.textContent = 'Teach Students';    // short way of adding text          
console.log(newTodoItem);

todoList.append(newTodoItem);     // add elements at the end
todoList.prepend(newTodoItem);      // add elements at the beginning
newTodoItem.remove();     // removing an element

// todoList.before(newTodoItem);   // inserting element before an element
// todoList.after(newTodoItem);    // inserting element after an element

// todoList.insertAdjacentHTML('beforeend', '<li>teach students</li>')   // another way to add elements
// todoList.insertAdjacentHTML('afterbegin', '<li>teach students</li>')  // inside the given element

// todoList.insertAdjacentHTML('afterend', '<li>teach students</li>')  // another way to add elements
// todoList.insertAdjacentHTML('beforebegin', '<li>teach students</li>')  // outside the given element


// clone nodes 

const newTodoItem2 = newTodoItem.cloneNode(true);   // use true for deep cloning
todoList.append(newTodoItem)                    // clones even the child nodes of the given node
todoList.prepend(newTodoItem2)                  // means that textContent will also be cloned

// todoList.appendChild(newTodoItem)     // does same work as normal append
// todoList.insertBefore(newTodoItem2, newTodoItem)     // these methods are for use in IE
// todoList.replaceChild(newTodoItem2, newTodoItem)
todoList.removeChild(newTodoItem);
todoList.removeChild(newTodoItem2);


// static list vs live list 

const listItems = document.querySelectorAll('.todo-list li');
console.log(listItems);

const sixthListItem = document.createElement('li');
sixthListItem.textContent = 'item 6';
todoList.append(sixthListItem);

console.log(listItems);
                    // even though we have added a new element to our todo list
                    // the nodeList still shows the previous five elements
                    // but not the new element that we added

                    // the list obtained through querySelectorAll is a static list
                    // there its size remains the same

                    // while the list obtained through getElementById, getElementByClassName etc
                    // is a live list and can therefore be changed

const newListItems = todoList.getElementsByTagName('li');
console.log(newListItems);        // the HTMLCollection shows six li elements


// getting dimensions of element 

const info = todoList.getBoundingClientRect();
console.log(info)
console.log(info.height)
console.log(info.width)



// intro to events 
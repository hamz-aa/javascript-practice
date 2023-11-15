
// setTimeOut

// example 01
console.log('script start');

function hello(){
    console.log('hello world');
}

setTimeout(hello, 1000);     // 1000ms = 1 second
                             // so the function will be called after 1 second

console.log('script end');

// example 02
console.log('script start');

setTimeout(()=>{
    console.log('inside setTimeOut');
}, 0);
        // even though the time limit we gave was 0ms, the function still executes after the script end.
        // this is because any function inside the setTimeOut is moved into a queue by the browser.
        // this function only gets out of the queue after the entire script has terminated.

for(let i = 0; i < 100; i++){
    console.log('...');
}

console.log('script end');


// setTimeOut returns an ID
console.log(setTimeout(()=>{
                console.log('inside setTimeOut');
            }, 1000));



// clearTimeOut
console.log('script start');

const id = setTimeout(()=>{
    console.log('inside setTimeOut clear');
}, 1000);

for(let i = 0; i < 100; i++){
    console.log('...');
}

clearTimeout(id);   // the setTimeOut will be cleared and will not run

console.log('script end');


// setInterval

console.log('script start');

// setInterval(()=>{
//     console.log(Math.random());
// }, 1000);
                // the setInterval keeps calling the function again and again after the specified
                // time, i.e : in our case its 1000ms or 1 second.

for(let i = 0; i < 100; i++){
    console.log('...');
}

console.log('script end');



// callbacks

// callback hell
// pyramid of doom
heading1 = document.querySelector('.heading1');
heading2 = document.querySelector('.heading2');
heading3 = document.querySelector('.heading3');
heading4 = document.querySelector('.heading4');
heading5 = document.querySelector('.heading5');
heading6 = document.querySelector('.heading6');
heading7 = document.querySelector('.heading7');

setTimeout(()=>{
    heading1.textContent = 'one';
    heading1.style.color = 'violet';

    setTimeout(()=>{
        heading2.textContent = 'two';
        heading2.style.color = 'purple';

        setTimeout(()=>{
            heading3.textContent = 'three';
            heading3.style.color = 'red';
            
            setTimeout(()=>{
                heading4.textContent = 'four';
                heading4.style.color = 'pink';
        
                setTimeout(()=>{
                    heading5.textContent = 'five';
                    heading5.style.color = 'green';
            
                    setTimeout(()=>{
                        heading6.textContent = 'six';
                        heading6.style.color = 'blue';
                
                        setTimeout(()=>{
                            heading7.textContent = 'seven';
                            heading7.style.color = 'brown';
                        }, 1000);
                        
                    }, 3000);
                    
                }, 2000);
                
            }, 1000);
            
        }, 2000);

    }, 2000);

}, 1000);



// promises

// promise is a future value that you donot have currently but will have it in the future

let bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// new Promise(executor function);
// producing a promise
const friedRice = new Promise((resolve, reject)=>{
    if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
        resolve('Fried Rice');
    }
    else {
        reject('Couldn\'t do it' );
    }
});

// consuming a promise
// then method => then(onSuccessCallback, onFailureCallback)
friedRice.then((myFriedRice)=>{
    console.log('Lets eat', myFriedRice);
}, (error)=>{
    console.log(error)
});

// or use .then(onSuccessCallback).catch(onFailureCallback)
friedRice.then((myFriedRice)=>{
    console.log('Lets eat', myFriedRice);
}).catch((error)=>{
    console.log(error)
});
            // the promise is consumed by the browser. so after executing all the 
            // remaining js, then the promise is consumed i.e : it isn't done in a
            // sequential flow but works just like the setTimeOut function
            // discussed above



// function returning a promise

function ricePromise(){
    let bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
    return new Promise((resolve, reject)=>{
        if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
            resolve('Fried Rice');
        }
        else {
            reject('Couldn\'t do it' );
        }
    });
}

ricePromise().then((myFriedRice)=>{
    console.log('Lets eat', myFriedRice);
}, (error)=>{
    console.log(error)
});



// resolve / reject a promise after some time

function myPromise(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            flag = true;
            if(flag){
                resolve();
            }
            else{
                reject();
            }
        }, 2000)
    })
}

myPromise().then(()=>{console.log('resolved')}).catch(()=>{console.log('rejected')})


// resolve method in promise

const promiseResolve = Promise.resolve(7);
promiseResolve.then(val=>{console.log(val)})
        // then method always returns a promise

// promise chaining

function myPromise2(){
    return new Promise((resolve, reject)=>{
        resolve('foo')
    })
}

myPromise2().then((val)=>{
    console.log(val);
    val += 'bar';
    return val;             // 'then' here will not just return a val but will return an entire promise
}).then((val)=>{            //  this promise can again be caught by another 'then' and create a chain
    console.log(val);
})



// using promise to solve callback hell

function changeText(element, text, color, time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            } else {
                reject('element not found');      
            }
        }, 1000)
    })
}

// as we know that the above function returns a promise which we can save in a variable
const returnedPromise = changeText(heading1, '1', 'green', 1000);
returnedPromise.then(()=>{       // we can use then method on the returned promise
    return changeText(heading2, '2', 'red', 1000);
})
.then(()=>changeText(heading3, '3', 'green', 1000))
.then(()=>changeText(heading4, '4', 'purple', 1000))
.then(()=>changeText(heading5, '5', 'violet', 1000))
.then(()=>changeText(heading6, '6', 'yellow', 1000))
.then(()=>changeText(heading7, '7', 'cyan', 1000))
.catch((error)=>{
    alert(error);
})
            // in this way the issue of callback hell is solved through the use
            // of promises. we can also use catch method in case anything
            // goes wrong with the above code

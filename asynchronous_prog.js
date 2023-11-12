
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


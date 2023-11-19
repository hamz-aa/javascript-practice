
// async await

const url = 'https://jsonplaceholder.typicode.com/posts';

// using async keyword before a function makes sure that this
// function will always return a promise
async function getPosts(){

    // the await keyword waits for the promise to be resolved and only then returns it
    const response = await fetch(url);
    console.log(response);

    // checking for errors because catch block will handle only network related errors,
    // so the rest of errors must be checked here.
    if(!response.ok){
        throw new Error('Something is wrong')
    }

    // we can call json() method on response to get the JSON data from the server.
    // since json() method also returns a promise we can again use the await keyword
    // so that the returned promise is resolved.
    const data = await response.json();
    console.log(data);

    // this doesn't return the data but instead returns a promise because of 'async' keyword
    return data;
}

// const check = getPosts();
// console.log(check);     // promise


// since a promise is returned, we can use 'then' method
getPosts()
    .then(myData => console.log(myData))
    .catch(error => console.log(error))     // catch block will work only for network related errors



// incase of arrow functions

// const getPosts = async () => {

//     // the await keyword waits for the promise to be resolved and only then returns it
//     const response = await fetch(url);
//     console.log(response);

//     // checking for errors because catch block will handle only network related errors,
//     // so the rest of errors must be checked here.
//     if(!response.ok){
//         throw new Error('Something is wrong')
//     }

//     // we can call json() method on response to get the JSON data from the server.
//     // since json() method also returns a promise we can again use the await keyword
//     // so that the returned promise is resolved.
//     const data = await response.json();
//     console.log(data);

//     // this doesn't return the data but instead returns a promise because of 'async' keyword
//     return data;
// }


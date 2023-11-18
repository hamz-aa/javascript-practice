
// AJAX (asynchronous javascript and XML)

// XHR (XML HTTP Request)

const xhr = new XMLHttpRequest();
console.log(xhr);

// a fake API for testing
const URL = 'https://jsonplaceholder.typicode.com/posts';

// readyState can have five values i.e : from 0 to 4
// before using the open method, readyState is 0
console.log(xhr.readyState)     // 0

xhr.open('GET', URL);

// after using the open method, readyState is 1
console.log(xhr.readyState)     // 1

// after 1, rest of the states are displayed
// 2 for send()
// 3 for LOADING
// 4 for DONE
// info about readyState can be viewed on mdn docs
xhr.onreadystatechange = function(){    // 2, 3, 4
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        // console.log(xhr.response);

        const response = xhr.response;     // response gives the entire JSON to us
        console.log(typeof response);       // the returned JSON is always a string
        const data = JSON.parse(response);  // converting string back to object
        console.log(typeof data)
    }
}

// an alternative to the above lines of code is using the onload.
// the onload checks the readystate by itselt and is only executed
// if readyState == 4, so we don't have to explicitly check the state by ourselves.
xhr.onload = function(){
    console.log(xhr.readyState);
}

xhr.send();



// error handling in XHR 

// wrong URL
const newURL = 'https://jsonplaceholder.typicode.com/postss';

const newXHR = new XMLHttpRequest();

newXHR.open('GET', newURL);

newXHR.onload = ()=> {
    if(newXHR.status >= 200 && newXHR.status < 300){    // checking for error
        const data = JSON.parse(newXHR.response);
        console.log(data);
    }
    else {
        console.log('something went wrong');
    }
}

// for network related errors like no internet connection we can use onerror.
newXHR.onerror = () => {
    console.log('network error')
}

newXHR.send();



// requesting a specific object in the entire JSON
const newURL2 = 'https://jsonplaceholder.typicode.com/posts';
const newXHR2 = new XMLHttpRequest();

newXHR2.open('GET', newURL2);

newXHR2.onload = ()=> {
    if(newXHR2.status >= 200 && newXHR2.status < 300){    // checking for error
        const data2 = JSON.parse(newXHR2.response);
        
        console.log(data2[3]);       // indexing 4th element from object
        const id = data2[3].id;      // getting id from object
        const xhr3 = new XMLHttpRequest();
        const newURL3 = `${newURL2}/${id}`;     // creating new url
        console.log(newURL3);       // checking new url

        xhr3.open('GET', newURL3);      //  requesting new url by creating a new XMLHttpRequest
        xhr3.onload = () => {
            const data3 = JSON.parse(xhr3.response);
            console.log(data3);     // now we get specific data that we requested
        }
        xhr3.send();
    }
    else {
        console.log('something went wrong');
    }
}

// for network related errors like no internet connection we can use onerror.
newXHR2.onerror = () => {
    console.log('network error')
}

newXHR2.send();



// xhr using promises

const newURL4 = 'https://jsonplaceholder.typicode.com/posts';

function sendRequest(method, url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.onload = () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
            }
            else {
                reject(new Error('something went wrong'));
            }
        }

        xhr.onerror = () => {
            reject(new Error('network error'));
        }

        xhr.send();
    });
}

sendRequest('GET', newURL4).then(response => {
    const data = JSON.parse(response);
    console.log(data);
    return data[4].id;
}).then(id => {
    const url = `${newURL4}/${id}`;
    return sendRequest('GET', url);
}).then(response => {
    const newResponse = JSON.parse(response);
    console.log(newResponse);
}).catch(error => {
    console.log(error);
})



// fetch

const fetchURL = 'https://jsonplaceholder.typicode.com/posts';

// The functionality of the above xhr code that we wrote is automatically provided to
// us through fetch. By default, fetch uses the GET method and returns a promise.
const whatisthis = fetch(fetchURL);
console.log(whatisthis);     // promise

// since whatisthis is a promise, we can use 'then' method
whatisthis.then(response => {
    if(response.ok){    // see catch method below for explanation
        // the response parameter does not give us the JSON that we are looking for
        console.log(response);

        // so instead we call the json method on response object
        // console.log(response.json());       // this also returns a promise

        return response.json();
    }
    else {
        throw new Error('something went wrong');
    }
})
.then(data => {
    // this gives us the data that we are looking for
    console.log(data);
})
.catch(error => {
    console.log(error);
    // the above error will not be displayed.
    // this is because the promise in fetch is only rejected in case of
    // network errors. so we cannot display any other forms of errors like 404 not found.
    // in such cases we can use 'response.ok' which returns false for errors. 
})


// using POST method to add data to the API

// for POST, we add a second argument to the fetch method.
// the second argument asks us about the method which is POST.
// then we pass the data that we want to post and convert that data to
// string as data on server can only be stored in string format.
// finally we pass the header content.
fetch(fetchURL, {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
})
.then(response => {
    if(response.ok){
        console.log(response);
        return response.json();
    }
    else {
        throw new Error('something went wrong');
    }
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
})

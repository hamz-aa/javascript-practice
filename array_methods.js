// for each 

const numbers = [2, 4, 5, 8]

numbers.forEach((element, index) => {
    console.log(element, index)
});

const func = (element, index) => {
    console.log(element, index)
}

numbers.forEach(func)         // will also work

// map method


'use strict';

function repeat(fn, n) {
    for (let i = 0; i < n; i++) {
        fn();
    }
}
const hello = () => console.log('Hello world');
const goodbye = () => console.log('Goobye world');
console.log(repeat(goodbye, 5));

function filter(arr, fn) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
    // TASK: Define your function here
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

// <---- DO NOT EDIT BETWEEN THESE LINES

const filterName = filter(myNames, name => name[0] === 'R')
console.log(filterName) // => ['Rich', 'Ray']




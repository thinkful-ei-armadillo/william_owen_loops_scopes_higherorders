'use strict';

function repeat(fn, n) {
    for (let i = 0; i < n; i++) {
        fn();
    }
}
const hello = () => console.log('Hello world');
const goodbye = () => console.log('Goobye world');
// console.log(repeat(goodbye, 5));

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
// console.log(filterName) // => ['Rich', 'Ray']

function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    return location => {
        warningCounter++;
        warningCounter === 1 ? console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`) : console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
        // console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        // console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const mudslideWarning = hazardWarningCreator('MUDSLIDE!');
const tornadoWarning = hazardWarningCreator('TORNADO!');

// rocksWarning('Centinela Ave and Olympic Blvd');
// mudslideWarning('Centinela Ave and Olympic Blvd');
// tornadoWarning('Centinela Ave and Olympic Blvd');

// rocksWarning('Centinela Ave and Olympic Blvd');
// mudslideWarning('Centinela Ave and Olympic Blvd');
// tornadoWarning('Centinela Ave and Olympic Blvd');


const turtleMove = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// const moves = turtleMove.filter((move) => (move[0] >= 0 && move[1] >= 0))
//    .map(item => item[0] + item[1])
//    .forEach(item => console.log(item));


const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
const listInput = input.split(' ');
const reducedInput = listInput.reduce((acc, word) => (word.length === 3 ? acc+= " " : acc+=word[word.length-1].toUpperCase()), " ");

// const reducedInput = listInput.reduce(iterator, "")

function iterator(acc, word) {
    if (word.length === 3) {
         acc += " ";
    }
    else {
        acc += word[word.length-1].toUpperCase();
    }
    return acc
}


// console.log(reducedInput);


//Setup
const contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
// MENTOR GUIDED SOLUTION: MAIN DIFFERENCE THAT IT ASKS EACH ENTRY IF IT IS THE NAME,
// IF NOT, IT CHECKS NEXT ENTRY, NO OUTPUT UNTIL THE FOR LOOP HAS CHECKED THE ENTIRE CONTACT DATABASE
    for(let i in contacts) {
        console.log(i, contacts[i].firstName); //report index + contacts[index].property
        if(contacts[i].firstName == name){
            if(contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop];
            }
            else {
                return 'No Such Property';
            }
        }
    }
    return 'No Such Contact' //this return needs to be outside the for loop,
    // the program doesnt arrive at line 133 until the entire index has been checked for matching name
    // and if it finds the name, the function will terminate at the return line.
}
//   TERNARY ATTEMPT AT SOLUTION, W/O UNDERSTANDING FOR..IN LOOP
//  for (let element in contacts) {
//    return name !== contacts[i].firstName) && contacts[i].prop === undefined) ? element.[prop]
//        : name !== .firstName ? 'No Such Contact'
//        : 'No Such Property';
//  }
// 


// IF LOOP ATTEMPT THAT RETURNS ERROR ON EVERY ITERATION, RATHER THAN ONLY AFTER CHECKING ALL VALUES
// for (let i in contacts) {
//     console.log(contacts[i], i); //report current contacts index, as well as index value
//     if (name !== contacts[i].firstName) {
//         console.log(name, contacts[i].firstName);
//         return 'No Such Contact'
//     }
//     else if(contacts[i].prop === undefined) {
//         console.log(prop, contacts[i].[prop])
//         return 'No Such Property'
//     }
//     else {
//         console.log(contacts[i].[prop])
//         return contacts[i].[prop]
//     }
//   }
// }

// Only change code above this line
// Change these values to test your function
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Bob", "likes"));
"use strict";
function greet(name) {
    return `Hello ${name}, how was your day ?`;
}
const greeting = greet("Valentin");
console.log(greeting);
function userData(name, age) {
    console.log(`${name} is ${age} years old`);
}
userData("Valentin", 21);
// This comment will be used for to test tsc --watch. What tsc -watch does? With tsc watch is not anymore necessary to run everytime the tch command for to update our code, because now it happen automatic
// writing ts. But because the ts is not understatable we should command "tsc" so the typescript cli to turns it to js files and this js file we can run it in node or use it in our script html

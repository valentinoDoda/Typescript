"use strict";
function greet(name) {
    return `Hello ${name}, how was your day ?`;
}
const greeting = greet("Valentin");
console.log(greeting);
// writing ts. But because the ts is not understatable we should command "tsc" so the typescript cli to turns it to js files and this js file we can run it in node or use it in our script html

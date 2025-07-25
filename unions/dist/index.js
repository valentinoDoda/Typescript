"use strict";
function getUsername(username) {
    if (username !== null) {
        return `User: ${username}`;
    }
    else {
        return "Guest";
    }
}
// TESTS
const result = getUsername("Alice");
const result2 = getUsername(null);
console.log(result, result2);
function move(direction, distance) {
    console.log(direction, distance);
}
// TESTS
move("up", 10);
move("left", 5);
const handleErrorCase = (code) => {
    console.log(code);
};
const handleSuccessCase = (code) => {
    console.log(code);
};
const handleAllCase = (code) => {
    console.log(code);
};
handleAllCase("400");
handleSuccessCase("201");
handleErrorCase("404");

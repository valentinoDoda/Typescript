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

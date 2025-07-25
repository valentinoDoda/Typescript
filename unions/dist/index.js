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

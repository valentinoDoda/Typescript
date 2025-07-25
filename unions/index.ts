function getUsername(username: string | null) {
  if (username !== null) {
    return `User: ${username}`;
  } else {
    return "Guest";
  }
}

// TESTS

const result = getUsername("Alice");
const result2 = getUsername(null);

console.log(result, result2)


type Direction = "up" | "left" | "down" | "top"


function move(direction: Direction, distance: number):void {
    console.log(direction, distance);
}

// TESTS

move("up", 10);
move("left", 5);
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

console.log(result, result2);

type Direction = "up" | "left" | "down" | "top";

function move(direction: Direction, distance: number): void {
  console.log(direction, distance);
}

// TESTS

move("up", 10);
move("left", 5);

type ErrorCase = "400" | "401" | "404" | "500";
type SuccessCase = "200" | "201" | "204";

type HttpCode = ErrorCase | SuccessCase;

const handleErrorCase = (code: ErrorCase) => {
  console.log(code);
};

const handleSuccessCase = (code: SuccessCase) => {
  console.log(code);
};

const handleAllCase = (code: HttpCode) => {
  console.log(code);
};
handleAllCase("400");
handleSuccessCase("201");
handleErrorCase("404");

function validateUsername(username: string | null): boolean {
  // Rewrite this function to make the error go away
  if (username) {
    return username.length > 5;
  }
  return false;
}

//Narrowing in TypeScript is the process of refining a variable's type from a broader union (e.g. string | number) to a more specific type based on runtime checks

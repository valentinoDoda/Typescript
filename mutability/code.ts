// CODE

type SomeTypes = "button" | "submit" | "reset"
let type:SomeTypes = "reset";

// TESTS

type ButtonAttributes = {
  type: SomeTypes ;
};

const buttonAttributes: ButtonAttributes = {
  type,
};

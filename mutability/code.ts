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


type User = {
  readonly id: number;
  name: string;
  age: number;
};

const updateUser = (user: User) => {
  user.name = "Jane Doe";
  user.age = 30;

  // @ts-expect-error Should not be able to modify readonly
  user.id = 1;
};

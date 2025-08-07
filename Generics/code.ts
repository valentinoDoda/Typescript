type ErrorShape = {
  error: {
    message: string;
  };
};
type DataShape<T> =
  | {
      data: T;
    }
  | ErrorShape;

type UserDataShape = DataShape<{
  id: string;
  name: string;
  email: string;
}>;

type PostDataShape = DataShape<{
  id: string;
  title: string;
  body: string;
}>;

type PromiseFunc<InputType, PromiseType> = (
  input: InputType
) => Promise<PromiseType>;

// type Result<TResult, TError = Error> =
//   | {
//       success: true;
//       data: TResult;
//     }
//   | {
//       success: false;
//       error: TError;
//     };

// const createRandomNumber = (): Result<number> => {
//   const num = Math.random();

//   if (num > 0.5) {
//     return {
//       success: true,
//       data: 123,
//     };
//   }

//   return {
//     success: false,
//     error: new Error("Something went wrong"),
//   };
// };

// const result = createRandomNumber();

type Result<TResult, TError extends {message : string} = Error> =
  | {
      success: true;
      data: TResult;
    }
  | {
      success: false;
      error: TError;
    };

type BadExample = Result<
  { id: string },
  // @ts-expect-error Should be an object with a message property
  string
>;

type StrictOmit<T, K extends keyof T > = Omit<T, K>;

type ShouldFail = StrictOmit<
  { a: string },
  // @ts-expect-error
  "b"
>;


type AbsoluteRoute = `/${string}`
const goToRoute = (route: AbsoluteRoute) => {
  // ...
};

goToRoute("/home");
goToRoute("/about");
goToRoute("/contact");

goToRoute(
  // @ts-expect-error
  "somewhere",
);

type BreadType = "rye" | "brown" | "white";

type Filling = "cheese" | "ham" | "salami";

type Sandwich = `${BreadType} sandwich with ${Filling}`;

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

type AttributeGetters = {
    [K in keyof Attributes] : ()=> Attributes[K]
};

// Your challenge is to adjust the AttributeGetters type to remap the keys as specified.

// To do this, you will need to do some key remapping with the as keyword along with template literal types, as well as the Capitalize helper type.

// Hint: All of this will take place where the AttributeGetters currently has [K in keyof Attributes].
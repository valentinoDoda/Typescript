// CODE

const createStringMap = <T = string>() => {
  return new Map<string, T>();
};

const stringMap = createStringMap();

stringMap.set("foo", "bar");

stringMap.set(
  "bar",
  // @ts-expect-error
  123
);

const numberMap = createStringMap<number>();

numberMap.set("foo", 123);
numberMap.set(
  "bar",
  // @ts-expect-error
  true
);

const objMap = createStringMap<{ a: number }>();

objMap.set("foo", { a: 123 });

objMap.set(
  "bar",
  // @ts-expect-error
  { b: 123 }
);

const uniqueArray = <T>(arr: T[]) => {
  return Array.from(new Set(arr));
};

const result = uniqueArray([1, 1, 2, 3, 4, 4, 5]);

const result2 = uniqueArray(["a", "b", "b", "c", "c", "c"]);

const UNKNOWN_CODE = 8000;

const addCodeToError = <TError>(error: TError) => {
  return {
    ...error,
    code: error.code ?? UNKNOWN_CODE,
  };
};

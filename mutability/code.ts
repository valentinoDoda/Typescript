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


type SearchParams = {
  q?: string;
  page?: number;
  pageSize?: number;
  sort?: string;
  order?: "asc" | "desc";
};

const handleSearchParams = (search: SearchParams) => {
  // Do something with the search params

  // @ts-expect-error Should not be able to modify readonly
  search.q = "test";

  // @ts-expect-error Should not be able to modify readonly
  search.page = 1;

  // @ts-expect-error Should not be able to modify readonly
  search.pageSize = 10;

  // @ts-expect-error Should not be able to modify readonly
  search.sort = "name";

  // @ts-expect-error Should not be able to modify readonly
  search.order = "asc";
};

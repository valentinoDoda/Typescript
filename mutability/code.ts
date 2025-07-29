// CODE
type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};

const modifyButton = (attributes: ButtonAttributes) => {};

const buttonAttributes = {
  type: "button",
} as const;

modifyButton(buttonAttributes);


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

const handleSearchParams = (search: Readonly<SearchParams>) => {
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



function printNames(names: readonly string[]) {
  for (const name of names) {
    console.log(name);
  }

  // @ts-expect-error
  names.push("John");

  // @ts-expect-error
  names[0] = "Billy";
}
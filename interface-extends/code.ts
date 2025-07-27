interface BaseEntity  {
  id: string;
  createdAt: Date;
};

interface User extends BaseEntity  {
  name: string;
  email: string;
}

interface Product extends BaseEntity  {
  name: string;
  price: number;
}


interface UserPart  {
  name: string;
  age: number;
};

interface UserPart2  {
  phone: string;
};

interface User2 extends UserPart , UserPart2 {
  id: string
}

const user: User2 = {
  id: "1",
  name: "John",
  age: 20,
  phone: "123456789",
};



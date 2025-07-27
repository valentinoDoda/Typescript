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

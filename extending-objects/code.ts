type BaseEntity = {
  id: string;
  createdAt: Date;
}

type User = {
  name: string;
  email: string;
} & BaseEntity;

type Product = {
  name: string;
  price: number;
} & BaseEntity;

//Refactor τους τύπους User και Product ώστε να βασίζονται στον κοινό τύπο BaseEntity με τις ιδιότητες id και createdAt
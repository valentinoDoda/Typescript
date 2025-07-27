# 📘 Extending Objects in TypeScript

Το μάθημα παρουσιάζει πώς να χρησιμοποιούμε τον τελεστή **intersection (**`&`**)** στην TypeScript για να επεκτείνουμε αντικείμενα και να αποφεύγουμε επαναλαμβανόμενο κώδικα.

## 🔣 Τι είναι ο τελεστής `&`

- Ο τελεστής `&` δημιουργεί **intersection types**, δηλαδή τύπους που **συνδυάζουν** τις ιδιότητες από δύο ή περισσότερους τύπους.
- Αντίθετα με το `|` (union), που σημαίνει “είτε το ένα είτε το άλλο”, το `&` σημαίνει “και τα δύο”.

## 🧪 Παράδειγμα

```tsx
type A = { a: string };
type B = { b: string };
type AandB = A & B;

const example: AandB = {
  a: "hello",
  b: "world"
};
```

Για να ικανοποιήσεις τον τύπο `AandB`, πρέπει να παρέχεις **και τις δύο** ιδιότητες: `a` και `b`.

## 🧱 Πραγματική Εφαρμογή

Έστω οι παρακάτω τύποι:

ts

```tsx
type User = {
  id: string;
  createdAt: Date;
  name: string;
  email: string;
};

type Product = {
  id: string;
  createdAt: Date;
  name: string;
  price: number;
};
```

Παρατηρείται επανάληψη στις ιδιότητες `id` και `createdAt`.

## 🛠️ Refactoring με Intersection

Δημιουργούμε έναν κοινό τύπο:

ts

```tsx
type BaseEntity = {
  id: string;
  createdAt: Date;
};
```

Και τον επεκτείνουμε:

ts

```tsx
type User = BaseEntity & {
  name: string;
  email: string;
};

type Product = BaseEntity & {
  name: string;
  price: number;
};
```

## 🎯 Πλεονεκτήματα

- **DRY (Don't Repeat Yourself)**: Αποφεύγεις επανάληψη στον ορισμό τύπων.
- **Ευκολία συντήρησης**: Αν προσθέσεις νέα κοινή ιδιότητα (π.χ. `updatedAt`), την προσθέτεις μόνο στο `BaseEntity`.
- **Καθαρός και επεκτάσιμος κώδικας**.

## 🧩 Πρόκληση του μαθήματος

> Refactor τους τύπους User και Product ώστε να βασίζονται στον κοινό τύπο BaseEntity με τις ιδιότητες id και createdAt.

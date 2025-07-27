 Το μάθημα **“Extend an Object Using Interfaces in TypeScript”** εξηγεί πώς να επεκτείνεις αντικείμενα στην TypeScript με πιο καθαρό και αποτελεσματικό τρόπο χρησιμοποιώντας **interfaces** αντί για **intersection types (**`&`**)**.

## 🧠 Τι λέει το μάθημα

### 🔹 Το αρχικό σενάριο

Έχεις τρεις τύπους:

ts

```tsx
type BaseEntity = {
  id: string;
  createdAt: Date;
};

type User = {
  name: string;
  email: string;
} & BaseEntity;

type Product = {
  name: string;
  price: number;
} & BaseEntity;
```

Οι τύποι `User` και `Product` επεκτείνονται μέσω του τελεστή `&` από τον `BaseEntity`, ώστε να περιλαμβάνουν τις ιδιότητες `id` και `createdAt`.

### ⚠️ Το πρόβλημα

Η χρήση του `&` για να επεκτείνεις αντικείμενα **δεν είναι η πιο αποτελεσματική μέθοδος** όταν πρόκειται για κληρονομικότητα. Είναι πιο κατάλληλη για σύνθεση τύπων, όχι για ιεραρχία αντικειμένων.

### ✅ Η λύση: `interface extends`

Το μάθημα προτείνει να χρησιμοποιήσεις **interfaces** και το `extends` για να δημιουργήσεις πιο καθαρό και επεκτάσιμο κώδικα:

ts

```tsx
interface BaseEntity {
  id: string;
  createdAt: Date;
}

interface User extends BaseEntity {
  name: string;
  email: string;
}

interface Product extends BaseEntity {
  name: string;
  price: number;
}
```

## 🔍 Ποια είναι η ουσιαστική διαφορά;

| Χαρακτηριστικό | `type &` (Intersection) | `interface extends` |
| --- | --- | --- |
| 🔧 Χρήση | Συνδυάζει τύπους | Κληρονομεί ιδιότητες |
| 📦 Σκοπός | Σύνθεση | Κληρονομικότητα |
| 🧩 Ευελιξία | Μπορεί να συνδυάσει οποιονδήποτε τύπο | Μόνο με άλλες `interface` |
| 🧼 Αναγνωσιμότητα | Λιγότερο σαφής για κληρονομικότητα | Πιο καθαρή και προφανής |
| 🛠️ Υποστήριξη IDE | Περιορισμένη σε refactoring | Πλήρης υποστήριξη (π.χ. VS Code) |
| 🔄 Συγχώνευση | Δεν υποστηρίζει declaration merging | Υποστηρίζει (π.χ. επαναχρησιμοποίηση ονομάτων) |

## 🧠 Πώς επηρεάζει τον κώδικα;

### Με `type &`:

ts

```tsx
type BaseEntity = { id: string; createdAt: Date };

type User = { name: string; email: string } & BaseEntity;
```

- Ο `User` είναι ένας **συνδυασμός** δύο τύπων.
- Δεν υπάρχει σαφής ένδειξη ότι ο `User` **κληρονομεί** από `BaseEntity`.
- Αν προσθέσεις νέα ιδιότητα στο `BaseEntity`, ο `User` την παίρνει, αλλά η σχέση δεν είναι εμφανής.

### Με `interface extends`:

ts

```tsx
interface BaseEntity {
  id: string;
  createdAt: Date;
}

interface User extends BaseEntity {
  name: string;
  email: string;
}
```

- Ο `User` **κληρονομεί** από `BaseEntity`.
- Η σχέση είναι **σαφής και δηλωμένη**.
- Αν χρησιμοποιείς IDE, μπορείς να δεις την ιεραρχία, να κάνεις refactor εύκολα, και να επεκτείνεις με ασφάλεια.


## 🧩 Πρόκληση

> Αναδόμησε τους τύπους User και Product ώστε να χρησιμοποιούν interface extends αντί για intersection με BaseEntity.

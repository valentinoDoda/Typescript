 
👨‍🏫 **Τι λέει ο καθηγητής στο μάθημα:**

- Όταν έχεις **δύο interfaces με το ίδιο όνομα**, η TypeScript **τα συγχωνεύει** σε μία ενιαία δήλωση.
- Αυτό **δεν συμβαίνει με types** — αν προσπαθήσεις να δηλώσεις δύο types με το ίδιο όνομα, θα πάρεις **σφάλμα**.
- Η συγχώνευση γίνεται **μόνο όταν οι δηλώσεις είναι στο ίδιο module scope**.
- Ο καθηγητής προτείνει να χρησιμοποιούμε **type αντί για interface** από προεπιλογή, για να αποφεύγουμε τέτοιες ανεπιθύμητες συμπεριφορές.

📌 **Παράδειγμα από το μάθημα:**

ts

```tsx
interface Logger {
  log(message: string, level: number): void;
}

interface Logger {
  log(message: string): void;
}
```

Αυτό **δεν προκαλεί σφάλμα** στην TypeScript — οι δύο δηλώσεις συγχωνεύονται και η τελική `Logger` interface απαιτεί και `message` και `level`.

Αντίθετα, αν έγραφες:

ts

```tsx
type Logger = {
  log(message: string, level: number): void;
};

type Logger = {
  log(message: string): void;
};
```

Η TypeScript θα σου έβγαζε **σφάλμα για duplicate identifier**.
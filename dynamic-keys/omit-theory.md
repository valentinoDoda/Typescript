  
## 🧠 Τι μας εξηγεί η σελίδα για το `Omit`

### 🔹 Ορισμός:

Ο `Omit<Type, Keys>` είναι ένας **βοηθητικός τύπος** που δημιουργεί έναν νέο τύπο **αφαιρώντας** τα πεδία που καθορίζουμε από έναν υπάρχοντα τύπο.

### 📦 Παράδειγμα από τη σελίδα:

ts

```tsx
type ProductWithoutId = Omit<Product, "id">;
```

Αυτός ο τύπος περιλαμβάνει όλα τα πεδία του `Product` **εκτός από το** `id`.

Χρησιμοποιείται στη συνάρτηση:

ts

```tsx
const addProduct = (productInfo: ProductWithoutId) => {
  // Χρησιμοποιούμε το αντικείμενο χωρίς το πεδίο id
};
```

Αν προσπαθήσουμε να περάσουμε `id`, TypeScript θα εμφανίσει σφάλμα:

ts

```tsx
addProduct({
  // @ts-expect-error
  id: 1,
  name: "Book",
  price: 12.99,
  description: "A book about Dragons",
});
```

### ✅ Πλεονεκτήματα του `Omit`:

- **Απλότητα**: Δεν χρειάζεται να δημιουργούμε νέες interfaces με χειροκίνητο τρόπο.
- **Καθαρότητα**: Ο αρχικός τύπος (`Product`) παραμένει η “πηγή αλήθειας”.
- **Ευελιξία**: Μπορούμε να αφαιρέσουμε πολλά πεδία:
    
    ts
    
    `type ProductWithoutIdOrName = Omit<Product, "id" | "name">;`
    

### 🔄 Εναλλακτική (λιγότερο προτιμητέα):

Η σελίδα δείχνει ότι μπορούμε να δημιουργήσουμε interfaces όπως:

ts

```tsx
interface WithId { id: number; }
interface ProductInfo { name: string; price: number; description: string; }
interface Product extends WithId, ProductInfo {}
```

Αλλά αυτό είναι **πιο περίπλοκο** και **κρύβει τη δομή** του τύπου.

## 🧩 Συμπέρασμα

Η σελίδα μας δείχνει ότι το `Omit` είναι:

- **Το αντίστροφο του** `Pick`
- **“Super duper cool and very widely useful”**
- Ιδανικό για περιπτώσεις όπου θέλουμε να **αφαιρέσουμε πεδία** από έναν τύπο χωρίς να επαναπροσδιορίσουμε ολόκληρη τη δομή.
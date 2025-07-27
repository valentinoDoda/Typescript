Ο εκπαιδευτής στο μάθημα **“Dynamic Keys with Index Signatures and Record Types”** μας εξηγεί πώς να επιτρέπουμε **δυναμικά κλειδιά** σε αντικείμενα στην TypeScript, και ποιοι είναι οι καλύτεροι τρόποι να το κάνουμε.

## 🧠 Τι εξηγεί

### 🔹 Το πρόβλημα

Έχουμε ένα αντικείμενο `scores`:

ts

```tsx
const scores = {};
scores.math = 95;
scores.english = 90;
```

Η TypeScript εμφανίζει σφάλμα:

> Property 'math' does not exist on type '{}'
> 

## ✅ Λύσεις που προτείνει

### 1. **Index Signature**

Ορίζουμε τύπο που επιτρέπει οποιοδήποτε string key με αριθμητική τιμή:

ts

```tsx
type Scores = {
  [subject: string]: number;
};
```

Ή με `interface`:

ts

```tsx
interface Scores {
  [key: string]: number;
}
```

### 2. **Inline Index Signature**

Μπορούμε να το γράψουμε απευθείας:

ts

```tsx
const scores: { [key: string]: number } = {};
```

### 3. **Record Helper Type**

Η πιο καθαρή και επαναχρησιμοποιήσιμη λύση:

ts

```tsx
const scores: Record<string, number> = {};
```

- Είναι πιο **ευανάγνωστο**.
- Είναι **προτιμητέο** γιατί χρησιμοποιεί abstraction αντί για χαμηλού επιπέδου σύνταξη.

## 🎯 Συμπέρασμα

| Μέθοδος | Πλεονεκτήματα |
| --- | --- |
| `Index Signature` | Ευέλικτη, αλλά πιο “χαμηλού επιπέδου” |
| `Record<string, number>` | Καθαρή, επαναχρησιμοποιήσιμη, προτιμητέα |
| `Inline` | Γρήγορη, αλλά όχι επαναχρησιμοποιήσιμη |

Ο εκπαιδευτής προτείνει να χρησιμοποιούμε `Record` ως **πρώτη επιλογή**, εκτός αν υπάρχει λόγος να πάμε σε index signature.
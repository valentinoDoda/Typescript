const name1 :string = "Valentin" // type string
const age :number = 12 // type number
const isAdult :boolean = true //type boolean
const programmingLangs: string[] = ['js', 'astro', 'vue']; // array of strings
const friends: Array<string> = ["a","b"]; // alternative way
const anyType :any = "A" // can take any type of value

console.log(
    name1,
    age,
    isAdult,
    programmingLangs,
    friends,
    anyType
)


function returnSum(num1 :number, num2 :number):number {
    return num1 + num2;
}

// we can set types inside the arguments and what type the function will return

// the function can be just void


function showSum(num1 :number, num2 :number):void {
    console.log(num1+num2)
}

showSum(1,5);

const concatName = (first: string, last: string = "Doda") => {
  return `${first} ${last}`;
};

const result = concatName("John", "Doe");
const result2 = concatName("John");

console.log(result2, result)

// the optional argument tells that the value should me string or undefined


type User = {
    first: string,
    last: string,
}

const concatName2 = (user: User) :string => {
  return `${user.first} ${user.last}`;
};

const result3 = concatName2({
    first: "John",
    last: "Doe",
})

console.log(result3)



// How do we type 'items' in the ShoppingCart?
type ShoppingCart = {
  userId: string;
  items: string[]
};

// TESTS

const processCart = (cart: ShoppingCart):void => {
  console.log(cart.userId, ...cart.items);
};

processCart({
  userId: "user123",
  items: ["item1", "item2", "item3"],
});

type Ingredients = {
  name : string,
  quantity : string
}

type Recipe = {
  title: string,
  ingredients : Ingredients[],
  instructions: string,
};

const processRecipe = (recipe: Recipe):void => {
  console.log(recipe)
};

processRecipe({
  title: "Chocolate Chip Cookies",
  ingredients: [
    { name: "Flour", quantity: "2 cups" },
    { name: "Sugar", quantity: "1 cup" },
  ],
  instructions: "...",
});



function concatenate( age: number , ...args : string[]):string { //with the rest parameters we take all the parameters of function
  return ` ${age} ${args.join("")}`;
}

const result5 = concatenate(31,"Hello", " ", "World");


console.log(result5)
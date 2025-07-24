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

const concatName = (first: string, last?: string) => {
  if (!last) {
    return first;
  }

  return `${first} ${last}`;
};

const result = concatName("John", "Doe");
const result2 = concatName("John");

console.log(result2, result)

// the optional argument tells that the value should me string or undefined
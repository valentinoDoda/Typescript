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
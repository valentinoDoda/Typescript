function greet(name : string): string {
    return `Hello ${name}, how was your day ?`;
}

const greeting: string = greet("Valentin");

console.log(greeting);

// writing ts. But because the ts is not understatable we should command "tsc" so the typescript cli to turns it to js files and this js file we can run it in node or use it in our script html
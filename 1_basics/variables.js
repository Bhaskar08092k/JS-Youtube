const userId=10;
let name="bhaskar";
var age=24;
city = "hyderabad";
name="bhaskar rao";
var age=25; // redeclaring with var
console.table([userId, name, age, city]);
console.log(`User ID: ${userId}, Name: ${name}, Age: ${age}, City: ${city}`);
// Note: 'city' is declared without 'var', 'let', or 'const', which is not recommended in strict mode.
// It is better to declare variables with 'let' or 'const' to avoid polluting
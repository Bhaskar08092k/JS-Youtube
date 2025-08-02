let marvel_heros = ["ironman", "hulk", "spiderman"];
let dc_heros = ["batman", "superman", "aquaman"];
// marvel_heros.push(dc_heros); 
// console.log(marvel_heros); //  'ironman', 'hulk', 'spiderman', [ 'batman', 'superman', 'aquaman' ] ]
// marvel_heros.concat(dc_heros);
// console.log(marvel_heros); //  'ironman', 'hulk', 'spiderman', [ 'batman', 'superman', 'aquaman' ] ]
// console.log(marvel_heros[3][0]); // batman

// let new_heroes = marvel_heros.concat(dc_heros); // creating a new array helps to combine both arrays without modifying the original ones
// console.log(new_heroes); // Output: [ 'ironman', 'hulk', 'spiderman', 'batman', 'superman', 'aquaman'
 
//using spread operator
// let new_heroes = [...marvel_heros, ...dc_heros];
// console.log(new_heroes); // Output: [ 'ironman', 'hulk', 'spiderman', 'batman', 'superman ', 'aquaman' ]

let another_array = [1,2,3,[4,5,6],7,[8,9,10,[11,12,13]]];
//to convert nested arrays into a single array
 let flat_array = another_array.flat(Infinity); // Infinity will flatten all levels of nested arrays

// console.log(Array.isArray(flat_array)); // Output: true  => confirms that flat_array is an array
// console.log(Array.isArray("bhaskar")); // Output: false => confirms that "bhasakar" is not an array

// to convert values into an array
let a = "bhaskar";
let b = 10;
let c = true; 
console.log(Array.of(a,b,c)); // Output: [ 'bhaskar', 10, true ] => confirms that al is an array containing the values of a, b, and c
console.log(Array.from("bhaskar")); // Output: [ 'b', 'h', 'a', 's', 'k', 'a', 'r' ] => converts the string into an array of characters

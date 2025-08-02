// singleton object
//Object.create()

// object literals

const sym= Symbol("key");
const person = {
    name: 'bhaskar',
    sym: 'world', // using symbol as a key
    "full name": "bhaskar rao",
    age: 25,
    isstudent: false,
    email: "user@gmail.com." ,  
}
// console.log(person.email); // accessing object properties using dot notation
// console.log(person["email"]) // accessing object properties using bracket notation
// console.log(person["full name"]); // accessing object properties with spaces using bracket notation
// console.log(person[sym]); // accessing symbol property
// console.log(typeof person[sym]); // accessing symbol propertys

// person.email="user@chatgpt.com"; // updating object property
// console.log(person); // printing the entire object
// Object.freeze(person); // freezing the object to prevent further modifications
// person.email = "user@outlook.com"; // trying to update email after freezing
// console.log(person.email); // still shows the original email since the object is frozen

person.greetings =function(){
      console.log("hello")
}

person.greetings2 =function(){
      console.log(`Hello ${this.name}`) //this is used to access properties of objects
}
console.log(person.greetings());
console.log(person.greetings2());
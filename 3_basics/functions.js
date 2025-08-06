// function name(){
//     console.log("b");
// console.log("h");
// console.log("a");
// console.log("s");
// console.log("k");
// console.log("a");
// console.log("r")
    
// }
// name();

// function add(a, b) {
//     console.log(a + b);
// }
// add(2,3);

// function add (a, b) {
//     return a + b;
//     console.log("This will not execute because the return statement ends the function.");
// }
//  add(3,4);



// function addition (a,b){
//     let result= a + b;
//     return result;
//     }

//     let result =addition(5,6);
// console.log(result); 


// function loginMessage (username) {
//     if (username === undefined){   // (!username || username === "")
//         return "enter a valid username";
//     }
//     return `${username} is logged in`;
// }
// console.log(loginMessage("")) // " is logged in"
//  console.log(loginMessage("bhaskar")) // "bhaskar is logged in"
// console.log(loginMessage()) // "undefined is logged in"


// function calculateCartPrice(num1){
//     return num1;
// }
// console.log(calculateCartPrice(100)); // 100
// console.log(calculateCartPrice(100,200,300)); // 100 because the function only takes one argument, it ignores the rest.

// function calculateCartPrice(...num1) {
//     return num1;
// }
// console.log(calculateCartPrice(100,200,300)); // [100, 200, 300] because the function uses the rest parameter syntax, which collects all remaining arguments into an array.



// let user ={
//     name :"bhaskar",
//     password : 12345
// }
// function username(anyobject){
//   console.log( `username is ${anyobject.name} and password is ${anyobject.password}`);
// }
//username(user);  // username is bhaskar and password is 12345
// username( { name: "bhaskar", password: 12345 } )  // username is bhaskar and password is 12345


// myarr[1,2,3,3];
// function  fun(arr){
//     return arr[2];
// }
// console.loglog(fun(myarr)); // 3
// console.loglog(fun([1,2,3,3])); // 3
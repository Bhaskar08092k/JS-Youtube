// const user={
//     username:"bhaskar",
//     age:25,
//     welcomeMessage : function() {
//         console.log(`${this.username} welcome to youtube  `);
//         // here "this" provides current context of the function
//        console.log(this); // output below

//        bhaskar welcome to youtube   
// {  username: 'bhaskar',
//   age: 25, }
// praveen welcome to youtube
// {  username: 'praveen',
//   age: 25, }


 //   }
//}
// user.welcomeMessage() // bhaskar welcome to youtube  
// user.username="praveen"
// user.welcomeMessage() // praveen welcome to youtube
// console.log(this) // output-> {} ==  empty


// let chai = function(){
//     let username='bhaskar'
    //  console.log(this) // output ->global Values
   //  console.log(this.username) //undefined
// }
// chai()

// ******* ARROW FUNCTIONS ********** //

// syntax ->   () => {}

// let code = () =>{
//     let username='bhaskar'
// console.log(this.username) 
// }
// code()

// let addtwo = (num1,num2) =>{  // explicit declaration
//     return num1+num2;
// }
// console.log(addtwo(5,6));

// *** implicit declaration(single line declaration) ****//
//   let addtwo = (num1,num2) => num1+num2;
//   let addtwo = (num1,num2) => (num1+num2); //same type of declaration
//    console.log(addtwo(5,6));

// ****** to print a object
// let addtwo = (num1,num2) => ({username:"bhaskar"}); // object must be inside curly braces and to be printed object has to be placed inside a parenthesis
// console.log(addtwo(5,6));  // output ->{ username: 'bhaskar' }
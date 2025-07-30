// let score=400;
// console.log(score);

// let balance= new Number(400);
// console.log(balance);
// console.log(balance.toString().length); // Converts to string and checks length
// console.log(balance.toFixed())  // Converts to string with no decimal places

// const acc_bal=1000000;
// console.log(acc_bal.toLocaleString(`en-IN`));
// ****************************  MATH ****************************

// console.log(Math);
// console.log(Math.abs(-10)); // Absolute value
// console.log(Math.ceil(4.2)); // Round up
// console.log(Math.floor(4.8)); // Round down to nearest integer
// console.log(Math.round(4.5)); // Round to nearest 
// console.log(Math.max(1, 2, 3, 4, 5)); // Maximum value
// console.log(Math.min(1, 2, 3, 4, 5)); // Minimum value  

console.log(Math.random()); // Random number between 0 and 1
console.log(Math.random() * 10); // Random number between 0 and 10
  let min=10;
  let max=20;

 console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random number between 10 and 20
  // if random gives 0.1  then floor gives 0 ,max-min+1 gives 11, so 0+10=10
  
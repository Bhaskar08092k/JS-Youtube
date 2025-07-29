let num=55;
console.log(typeof num);
let ValueOfNum =Number(num);
console.log(typeof ValueOfNum);
console.log(ValueOfNum);
// Converting  various datatypes to a number in JavaScript
//  value of converted variable
// 55 =>>
// string 55abc=> NaN // converted to number but not a valid number
// true => 1 false => 0



// now converting datatypes to a boolean
let str = "Hello";
let ValueOfStr = Boolean(str);  
console.log(typeof ValueOfStr);
console.log(ValueOfStr);

     // str = "Hello";   value= true, because non-empty string is true
    // when str=""        ValueOfStr will be false (empty)
 
   //let num2 = 10;  true, because non-empty nnumber is truthy     
 //  let num=0;      false, because 0 is falsy

    // ***************************** operations ***************************************
       
    // let no = 10;
    // let negno= -no; // negation operator
    // console.log(negno); // -10
            
    
      // console.log(5 + 5); // 10
      // console.log(5- 5); // 0
      // console.log(5 * 5); // 25   
      // console.log(5 / 5); // 1 
      // console.log(5 % 2); // 1 (remainder of 5 divided by 2)
      // console.log(5 ** 2); // 25 (5 raised to the power of 2)
  
        //  let str1 = "Hello";
        //   let str2 = "Bhaskar";
        //   let str3 = str1 + " " + str2; // string concatenation
        //   console.log(str3); // "Hello Bhaskar"
        //   console.log(str1 + str2); // "HelloBhaskar" (without space)

        // console.log("5" + 5); // "55" (string concatenation)  
       //console.log("5" - 5); // 0 (string converted to number)
       // console.log(5 + "5"); // "55" (string concatenation)
//console.log("5" +5+5); // 555 (string converted to number)
//console.log(5+5+"5"); // 105 (string concatenation)
 
//console.log(true + true); // 2 (true is converted to 1)
//console.log(+true); // 1 (true is converted to 1, false to 0)
  
// let a,b,c
// a=b=c=5;
// console.log(a,b,c); // 5

  // let a = 5;
  // let b = a++; If used postfix, the increment operator increments and returns the value(to y) before incrementing.
            // so a=6,b=5
 // let b = ++a; // If used prefix, the increment operator increments and returns the value after incrementing.
            // so a=6,b=6
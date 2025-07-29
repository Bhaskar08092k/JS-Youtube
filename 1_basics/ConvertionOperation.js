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

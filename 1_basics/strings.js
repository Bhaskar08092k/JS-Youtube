  // const name="John";
  // const id = 10;
  //  console.log(id +name); //old way of coding
  //    console.log(`my name is ${name} and my id is ${id}`); //new way of coding (output will be my name is John and my id is 10)
  //    console.log('my name is ${name} and my id is ${id}');  // output will be my name is ${name} and my id is ${id}
   //  here `` are placeholders and '' are string literals which directly prints everything inside them.
       //   ==================================================================================
    const mobile = new String('samsung'); // creating a string object
//     // console.log(mobile[0]); // output will be s
//     // console.log(mobile.length); // output will be 7
//     // console.log(mobile.toUpperCase()); // output will be SAMSUNG
//     console.log(mobile.charAt(3)); // output will be s(to check character at index 3)
//     console.log(mobile.indexOf('s')); // output will be 0 (to check index of character s)

//     const mobile1 = mobile.substring(0, 3); // to get substring from index 0 to 3 
//     console.log(mobile1); // output will be sam

    // const mobile2 = mobile.slice(-7,3); // to get substring from index -6 to 3
    // console.log(mobile2); // output will be sam(slice can also take negative index)


    // console.log(mobile.trim()); // output will be samsung (to remove whitespace from both sides of the string)
    // console.log(mobile.replace('s', 'S')); // output will be Samsung (to replace first occurrence of s with S)
    // console.log(mobile.replace(/s/g, 'S')); // output will be Samsung (to replace all occurrences of s with S)

    // console.log(mobile.split("")); // output will be [ 's', 'a', 'm', 's', 'u', 'n', 'g' ] (to split the string into an array of characters)
    // console.log(mobile.split("sa")); // output will be [ '', 'amsung' ] (to split the string into an array of substrings)
    //console.log(mobile.split(" ")); // output will be [ 'samsung' ]  // (to split the string into an array of substrings based on space)

    // console.log(mobile.startsWith('s')); // output will be true (to check if the string starts with s)
    // console.log(mobile.includes('sam')); // output will be true (to check if the string includes sam)

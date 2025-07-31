    // arrays
  const myarr = [1, 2, 3, 4, 5];
    //const myarr2 = new Array(1, 2, 3, 4, 5); // creating an array using the Array constructor
    // console.log(myarr);
    // console.log(myarr2);
    // console.log(myarr[0]); // accessing first element
    // console.log(myarr[myarr.length - 1]); // accessing last element

    // array methods
    // myarr.push(6); // adds an element to the end of the array
    // console.log(myarr); // [1, 2, 3, 4, 5, 6]
    // myarr.pop(); // removes the last element of the array
    // myarr.unshift(0); // adds an element to the beginning of the array
    // myarr.shift(); // removes the first element of the array

    // console.log(myarr.indexOf(3)); // returns the index of the first occurrence of an element
    // console.log(myarr.includes(3)); // checks if an element is present in the array

    // const newarr = myarr.join();
    //  console.log(newarr); // converts the array to a string

       // slice and splice
       console.log("A"  ,myarr); 
       const nyn1 = myarr.slice(0,3); // returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
        console.log(nyn1);
           console.log("B"  ,myarr); 
         const nyn2 = myarr.splice(0,3); // changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
        console.log(nyn2); // [1, 2, 3]
         console.log("C"  ,myarr); // [4, 5]




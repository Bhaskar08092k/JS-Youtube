//   Primitive data types
 
//   =>String, Number, Boolean, Null, Undefined, Symbol, BigInt

//  let name = "bhaskar";                    String
//  let age = 25;                            Number
//  let isMarried = false;                   Boolean
//  let address = null;                      Null
//  let phone;                               Undefined
//  let uniqueId = Symbol("123");            Symbol 
//  let UniqueId2 = Symbol("123");           Symbol (different from uniqueId)
// let bigNumber = 12345678901234567890n;    BigInt


//   non-primitive data types(reference types)

//   => Object, Array, Function
  
//    let names = ["bhaskar", "amith", "praveen", "abhi"];       Array    
    

//    let bio = {
//        firstName: "bhaskar",    
//           lastName: "rao",                                 key-value pairs
//             age: 25,
//    }                                                           Object
           
//   let hi = function()    { 
//         console.log("Hello World")
//    }   
//     hi(); 

//  **********************     ************************
        //    stacks (primitive data type)  heaps (non-primitive data type)
//  => Stacks are used to store primitive data types, which are fixed in size and
//     have a known memory footprint. These data types are stored directly in the stack.
//     Examples include numbers, booleans, and characters. The stack is a last-in-first-out (LIFO) data structure,
//     meaning that the last item added is the first one to be removed. 
//     The stack is typically used for function calls, local variables, and control flow.

//  => Heaps are used to store non-primitive data types, which can be of variable size and may require dynamic memory allocation.
//     These data types are stored in the heap, which is a larger pool of memory that   
//     can grow and shrink as needed. Examples include objects, arrays, and functions.
//     The heap is a more flexible memory structure, allowing for dynamic memory allocation and deallocation
//     during runtime. However, it is generally slower to access than the stack due to its dynamic nature.
//     The heap is used for data structures that require more complex memory management, such as linked 
//     lists, trees, and graphs.

//  let l=10;
//  let m=l; // m is a copy of l, stored in the stack

//  let user1 = {
//         name: "bhaskar",
//         age: 25
//     };
//     let user2 = user1; // user2 is a reference to the same object in the heap
//     user2.age = 30; // This will also change user1.age to 30, as both refer to the same object in the heap  
//     console.log(user1.age); // Output: 30
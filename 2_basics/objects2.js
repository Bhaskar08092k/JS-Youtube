// #singleton object
// Singleton objects are created using the Object constructor
// They are used to create a single instance of an object.  
// const youtuber = new Object();

    //  const youtuber = {}
    //  youtuber.name = "bhaskar";
    //  youtuber.age = 25;
    //  youtuber.id = 1;
    // youtuber.isMarried = false;
// console.log(youtuber);

//  const regularuser = {
//         email :"user@chatgpt.com",
//         username :{
//             fullname :  {
//                           firstName: "bhaskar",
//                           lastName: "Rao"
//                          }
//                    }
//             }
//             console.log(regularuser.username.fullname);


// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"c", 4:"d"}
// const obj4= {5:"a",6:"d"}
// const obj3 = {obj1,obj2}
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//  const obj3 = Object.assign(obj1,obj2); // Object.assign(target, ....sources)
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//    const obj3 = {...obj1,...obj2}
//     console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

  // array of objects
// const users = [
//     {id:1, name:"bhaskar", age:25, isMarried:false},
//     {id:2, name:"amith", age:26, isMarried:true},
//     {id:3, name:"praveen", age:27, isMarried:false}
          //    ] 
            //   console.log(users[2].name); // praveen
            //   console.log(youtuber);
            //   console.log(Object.keys(youtuber)); // [ 'name', 'age', 'id', 'isMarried' ]
            //   console.log(Object.values(youtuber)); // [ 'bhaskar', 25, 1, false ]
            //   console.log(Object.entries(youtuber)); // [ [ 'name', 'bhaskar' ], [ 'age', 25 ], [ 'id', 1 ], [ 'isMarried', false ] ]
                // console.log(youtuber.hasOwnProperty("name")); // true // Determines whether an object has a property with the specified name

    const course ={
        name: "JavaScript",
        price: 999,
        instructor: "hitesh"
    }
     //course.instructor;  // Accessing property using dot notation
     
    const {instructor} = course; // Destructuring assignment
    // here we are using destructuring assignment to extract the instructor property from the course object
    // instead of using course.instructor, we can directly use instructor
 //console.log(instructor); // hitesh
 
//  const {instructor : course_instructor} = course; // Destructuring assignment
//  console.log(course_instructor); // hitesh
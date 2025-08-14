//**************** immediately invoked function expressions (iife)   ******************/
( function chai (){
      console.log(` DB CONNECTED`)
} ) () ;




( function code(name){
      console.log(` DB CONNECTED ${name}`)
} ) ("bhaskar");




  (  () =>{
     console.log(`DB CONNECTED TWO`);
})()
   
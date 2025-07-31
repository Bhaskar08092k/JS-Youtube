 //const mydate= new Date ();
//   console.log(mydate);
//   console.log(mydate.toString());
  // output => 2025-07-31T06:00:30.517Z
  // Thu Jul 31 2025 11:30:30 GMT+0530 (India Standard Time) 
    // console.log(mydate.toISOString()); // 2025-07-31T06:00:30.517Z
    // console.log(mydate.toLocaleString()); // 31/7/2025, 12:00:30 PM
    // console.log(mydate.toLocaleDateString()); // 31/7/2025
    // console.log(mydate.toLocaleTimeString()); // 12:00:30 PM
    // console.log(mydate.getFullYear()); // 2025

     const newDate = new Date(2025, 6, 31, 11, 30, 30); // Year, Month (0-indexed), Day, Hours, Minutes, Seconds
    // console.log(newDate); // Thu Jul 31 2025 11:30:30 GMT+0530 (India Standard Time)
    // console.log(newDate.toLocaleString()); // 31/7/2025, 11:30:30 AM

     const mydate = new Date("01-12-2025");
     //console.log(mydate.getMonth()); // 0   (December, since months are 0-indexed)
       // console.log(mydate.getDate()); // 12
     //console.log(mydate.toLocaleString());  // 12/1/2025, 12:00:00 AM dd/mm/yyyy format

     const timeStamp =Date.now(); // Returns the number of milliseconds since January 1, 1970
     //console.log(timeStamp); // 1733011234567 (example output)
     //console.log(mydate.getTime()); // 1733011234567 (example output, same as timeStamp)
     //   console.log((Math.round(Date.now()/1000))); // Converts milliseconds to seconds); 



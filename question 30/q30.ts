let Username=['Talha','Hamza','Admin','Sajjad','Ali'];

for (let index = 0; index < Username.length; index++) {
   if (Username[index]==='Admin') {
    console.log(`Hello admin, would you like to see a status report?`)
   }else{
    console.log(`Hello ${Username[index]}, thank you for logging in again.`)
   }
    
}
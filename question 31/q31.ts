let Username=['Talha','Hamza','Admin','Sajjad','Ali'];
if (Username.length===0) {
    console.log('We need to find some Users.')
} else {
for (let index = 0; index < Username.length; index++) {
   if (Username[index]==='Admin') {
    console.log(`Hello admin, would you like to see a status report?`)
   }else{
    console.log(`Hello ${Username[index]}, thank you for logging in again.`)
   }
}
}
Username.splice(0,Username.length);//using this method to remove all elements in array
if (Username) {
    console.log('\nWe need to find some Users.');
    
}

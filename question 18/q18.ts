let myFavPlaces=['Khana kaba','Masjid-e-Nabwi','Dubai','Europe','Palestine'];
console.log("Without Order: "+myFavPlaces);
//writing in order
console.log("WIth Order: "+ [...myFavPlaces].sort());
//reversing by alphabetical order of our list
console.log("Reverse Order: "+ [...myFavPlaces].reverse());
//Prove that our string is not modified
console.log("Again Without Order: "+myFavPlaces);
//first our order is already reversed so after reversing again it will come in order eg:123=>321=>123
console.log([...myFavPlaces].sort());
//when we reverse this order we enter to decending order
console.log([...myFavPlaces].reverse());

"use strict";
let GuestsName = ["Talha!", "Hamza!", "Hassaan!"];
for (let index = 0; index < GuestsName.length; index++)
    console.log("Please come to dinner at my home. MR." + GuestsName[index]);
console.log("Talha will not come to dinner");
//talha will not make it so he is replaced by sajjad
GuestsName[0] = "Sajjad!";
for (let index = 0; index < GuestsName.length; index++)
    console.log("Please come to dinner at my home. MR." + GuestsName[index]);
console.log("Guys, I found a big table so I am inviting more people.");
GuestsName.unshift("ali", "abdullah"); //adding people in beginning
GuestsName.push("dani"); //adding people at end
for (let index = 0; index < GuestsName.length; index++)
    console.log("Please come to dinner at my home. MR." + GuestsName[index]);
console.log("Sorry Guys, I don't have enough space.So I am inviting specific people.");
GuestsName.pop();
for (let index = 0; index < GuestsName.length; index++)
    console.log("I am inviting you, MR." + GuestsName[index]);
console.log("Sorry MR.dani, I can't ivite you.");
GuestsName.pop(); //used to remove names or thing from beginning.
for (let index = 0; index < GuestsName.length; index++)
    console.log("I am inviting you, MR." + GuestsName[index]);
console.log("Sorry MR.Hamza, I can't ivite you.");
console.log("Sorry MR.Hassaan, I can't ivite you.");
GuestsName.pop();
console.log("Sorry MR.Sajjad, I can't ivite you.");
for (let index = 0; index < GuestsName.length; index++)
    console.log("I am inviting you, MR." + GuestsName[index]);
GuestsName.pop();
for (let index = 0; index < GuestsName.length; index++)
    console.log("I am inviting you, MR." + GuestsName[index]);
GuestsName = [];
console.log(GuestsName);
console.log("nothong");

"use strict";
let GuestsName = ["Talha!", "Hamza!", "Hassaan!"];
for (let index = 0; index < GuestsName.length; index++)
    console.log("Please come to dinner at my home. MR." + GuestsName[index]);
console.log("Talha will not come to dinner");
//talha will not make it so he is replaced by sajjad
GuestsName[0] = "Sajjad!";
for (let index = 0; index < GuestsName.length; index++)
    console.log("Please come to dinner at my home. MR." + GuestsName[index]);

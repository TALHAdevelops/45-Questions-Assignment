"use strict";
let current_users = ['talha', 'hamza', 'hassaan', 'sajjad', 'abdullah'];
let new_users = ['Talha', 'ali', 'khan', 'HAMZA', 'Gamer'];
for (let Username of new_users) {
    let userName_exists = current_users.map(users => users.toLowerCase()).includes(Username.toLowerCase());
    if (userName_exists) {
        console.log(`Sorry, This username ${Username} is already taken.Enter new username.`);
    }
    else {
        console.log(`This username ${Username} is available`);
    }
}

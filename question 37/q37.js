"use strict";
//calling function with default value of parameters
function make_shirt(size = 'Large', message = 'I love typescript.') {
    console.log(`Please make shirt of ${size} size and on shirt print:'${message}'`);
}
make_shirt();
//large shirt is already done above
//making medium shirt
make_shirt('Medium');
//making shirt of any size and different message
make_shirt('Small', 'I love python too');

"use strict";
function myCar(Manufacturar, Model, specs) {
    let car = {
        Manufacturar,
        Model
    };
    car[specs[0]] = specs[1]; //using this method to assign key and its value
    return car;
}
let my_car = myCar('Toyota', 'Supra', ['color', 'black']);
console.log(my_car);

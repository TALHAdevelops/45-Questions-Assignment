//comparison with equality and in equality of strings
let bestFruit='Mango';
let price=170;
//equality
console.log('\nIs Mango the best fruit ever?');
console.log(bestFruit=='Mango');
//inequality
console.log('\nIs apple the best fruit ever?');
console.log(bestFruit!='Mango');
//lowercase function
console.log('\nWill Mango is equal to mango when it is changed to lowercase?');
console.log(bestFruit.toLowerCase()=='mango');
//now making conditionals using numbers

//equalto
console.log('Is the price of Mangoes are 170RS per kg? ');
console.log(price==170);
//not equal to
console.log('Is the price of Mangoes are 190RS per kg? ');
console.log(price!=170);
//Greater than
console.log('Is the price of Mangoes are more than 110RS per kg? ');
console.log(price>110);
//Less than
console.log('Is the price of Mangoes are less 190RS per kg? ');
console.log(price<190);
//greater than or equalto
console.log('Is the price of Mangoes are near 165RS per kg? ');
console.log(price>=170);
//less than or equal to
console.log('Is the price of Mangoes are near 179RS per kg? ');
console.log(price<=170);

//now using && and || operators
let age=30;
//and (&&)operator
console.log('Is my age is 30 years?');
console.log(age==30&&age>24);
//Or(||)operator
console.log('Is my age is 30 years?');
console.log(age<24||age>33);

//Now testing using arrays
let lines=[90,50];
//item in array
console.log('Is this program lines are 50?');
console.log(1 in lines);
//item is not in array
console.log('Is this program lines are 25 ?');
console.log(25 in lines);
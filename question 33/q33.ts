let number=[1,2,3,4,5,6,7,8,9];

for (let index = 0; index < number.length; index++) {
    if (number[index]=== 1) {
        console.log(`${number[index]}st`);
        
    } else if (number[index]===2) {
        console.log(`${number[index]}nd`);
        
    }else if (number[index]===3) {
        
    console.log(`${number[index]}rd`);
    }else {
        console.log(`${number[index]}th`);
        
    }   

    
}
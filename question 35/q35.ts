let animals=['Lion','Tiger','Cheetah'];

for (let index = 0; index < animals.length; index++) {
    console.log(animals[index]);
}
for (let index = 0; index < animals.length; index++) {
   if (animals[index]==='Lion') {
    console.log(`${animals[index]} is the King of Jungle.`)
   } else if(animals[index]==='Tiger'){
    console.log(`${animals[index]} is the strongest animal.`);
   }else {
    console.log(`${animals[index]} is the fastest animal.`);
   }  
}
console.log('The characterstics which is common in these animals is that they all are hunters(predators).');

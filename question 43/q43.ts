let magicianNames=['Talha','Hamza','Hassaan'];
// using for loop to print each magicians in each line
function show_magicians(magician:string[]) {
  for (let index = 0; index < magician.length; index++) {
    console.log(magician[index])
    
  }  
}
show_magicians(magicianNames);

function make_great(greatmagic:string[]) {
    for (let index = 0; index < greatmagic.length; index++) {
       
        console.log(greatmagic[index] + ' the Great.')
    }
} make_great(magicianNames)
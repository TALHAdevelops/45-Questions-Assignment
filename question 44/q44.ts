function sandwich_items(items:string[]) {
    console.log('Sandwich consists of following items:');
    for (let index = 0; index < items.length; index++) {
       console.log('- '+items[index])   
    }
}
//calling functions
sandwich_items(['Egg','ketchup','Onions']);
sandwich_items(['Cheese','Kabab','Mayo']);
sandwich_items(['Lattice','Zinger','Chilli sauce']);
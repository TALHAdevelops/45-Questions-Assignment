interface Car{
    Manufacturar:string;
    Model:string;
    [key:string]:any;
}
function myCar(Manufacturar:string,Model:string,specs:[string,any]) {
    let car:Car={
        Manufacturar,
        Model
    }
    car[specs[0]] = specs[1];//using this method to assign key and its value
    
    return car
}
let my_car=myCar('Toyota','Supra',['color','black']);
console.log(my_car)
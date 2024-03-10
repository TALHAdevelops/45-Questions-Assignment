interface item{
    Name:string;
    Type:string;
    Price:number;
    Shop:string;
}
const object1:item =
 {
     Name: "Don't be Rude",
     Type: "book",
     Price: 289,
     Shop: "ali book center"
 }
const object2:item=
{
    Name: "Dell G-4432",
    Type: "Laptop",
    Price: 350000,
    Shop: "ali tradors"
}
console.log(`Object Name: ${object1.Name},Object Type: ${object1.Type},Object Price: ${object1.Price}`);
console.log(`Object Name: ${object2.Name},Object Type: ${object2.Type},Object Price: ${object2.Price}`);
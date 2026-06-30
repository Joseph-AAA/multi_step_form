


const fruits = [
    "Apple",
    "Orange",
    "Banana",
    "Grape",
    "Potota",
    "Apple2",
    "Banana2"
];

for (let i=0; i<fruits.length; i++){
    console.log(fruits);
}

for (const fruit of fruits){
    console.log(fruit);
}
const user = {
    name : "John",
    age: 20,
    city : "Yangon"
}
for (const person in user){
   
    console.log( person + " : "+user[person] )
}
// function message(num1, num2) {
//   console.log(num2);
// }
// message(1, 2);

// console.log(1.1);
// console.log(typeof typeof 1);

const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

let x = "";
// for (let i in myObj.cars) {
//   x += "<h1>" + myObj.cars[i].name + "</h1>";
//   for (let j in myObj.cars[i].models) {
//     x += myObj.cars[i].models[j];
//   }
// }

for (let i in myObj.cars) {
  x += myObj.cars[i].name;
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j];
  }
}
console.log(x);

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(Object.values(person)); //[ 'John', 30, 'New York' ]
let person1 = JSON.stringify(person);
console.log(person1); //{"name":"John","age":30,"city":"New York"}

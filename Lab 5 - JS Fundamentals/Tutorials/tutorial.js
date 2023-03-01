// COMMENT
// node --watch nameOfFile.js
//CTRL + C [WIN]
//CTRL + Z [MAC]
//clear for mac and cls for windows
//npm install --save prompt-sync
/*
import promptSync from "prompt-sync";
const prompt = promptSync();

const name = prompt("Please enter your name");
console.log("Welcome to JS Mr", name);

//Three ways to declare a varaible


const x = 10;
let y = 20;
// var z = 50;

// if (true) {
//   let z = 200;
//   console.log("Inside z = ", z);
// }

y = 50;
x = 50;
console.log("Outside z =", y);

*/

const person = {
  name: "Ali",
  age: 23,
  gender: "M",
  toString: function () {
    return this.name + " " + this.age + " " + this.gender;
  },
};

console.log(person.name);
console.log(person.toString());

const numbers = [1, [2, 3, 4], "Abdulahi"];
console.log(numbers[1][0]);

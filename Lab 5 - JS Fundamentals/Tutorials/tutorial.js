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



const person = {
  name: "Ali",
  age: 23,
  gender: "M",
  toString: function () {
    return this.name + " " + this.age + " " + this.gender;
  },
};

// console.log(person.name);
// console.log(person.toString());

const numbers = [1, [2, 3, 4], "Abdulahi", person];
console.log(numbers[3].name);


const numbers = [1, 2, 3, 4, 5];
numbers.push(100);
numbers.unshift(99);

console.log(numbers);

numbers.pop();
console.log("After pop", numbers);

numbers.shift();
console.log("After shift", numbers);

const sliced = numbers.slice(2, 4);
console.log(sliced);
console.log(numbers);

const spliced = numbers.splice(2, 1, 100, "Abdulahi");
console.log("spliced", spliced);
console.log("Numbers", numbers);



const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((a, b) => a + b);
// const even = numbers.filter((a) => a % 2 == 0);
// console.log(even);

function add(a, b) {
  return a + b;
}

const add2 = function (a, b) {
  return a + b;
};

const add3 = function (a, b, dis) {
  const result = a + b;
  dis(result);
};

const x = 10;
const y = 20;
const display = function (value) {
  console.log(value);
};
const display2 = function (value) {
  console.log("The value is ", value);
};
//first class citizens

console.log(add(x, y));
console.log(add(10, 20));
console.log(add2(1, 2));
add3(1, 2, display);
add3(1, 2, display2);
*/

function filter(numbers, filt) {
  const filtered = [];
  for (const n of numbers) {
    if (filt(n)) filtered.push(n);
  }
  return filtered;
}

const numbers = [2, 3, 4, 5];
filter(numbers, isEven);

function isEven(n) {
  return n % 2 == 0;
}

// COMMENT
// node --watch nameOfFile.js
//CTRL + C [WIN]
//CTRL + Z [MAC]
//clear for mac and cls for windows
//npm install --save prompt-sync
import promptSync from "prompt-sync";
const prompt = promptSync();

const name = prompt("Please enter your name");
console.log("Welcome to JS Mr", name);

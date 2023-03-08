import {
    display,
    deposit,
    withdraw,
    toJSON,
    fromJSON,
    sumBalance
} from "./bank.js";

display()
deposit(234, 3000)
display()

withdraw(234, 5000)
display()

console.log(Math.floor(Math.random() * 1000));

const jsonData = toJSON()
console.log(jsonData);
console.log(fromJSON(jsonData));
console.log('Total ', sumBalance());


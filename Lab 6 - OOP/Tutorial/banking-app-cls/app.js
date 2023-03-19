import SavingAccount from "./model/saving-account.js";


const accounts = [
    new SavingAccount(10000),
    new SavingAccount(20000),
    new SavingAccount(30000),
]

accounts.forEach(acc => console.log(acc.toString()))
export default class BankAccount {
    constructor(balance) {
        this._accountNo = Math.floor(Math.random() * 1000)
        this._balance = balance
    }

    getAccountNo() {
        return this._accountNo
    }
    getBalance() {
        return this._balance
    }

    setBalance(balance) {
        this._balance = balance
    }


    deposit(amount) {
        this._balance += amount
    }
    withdraw(amount) {
        this._balance -= amount
    }

    toString() {
        return ` Acc No : ${this._accountNo}, Balance : ${this._balance}`
    }
}
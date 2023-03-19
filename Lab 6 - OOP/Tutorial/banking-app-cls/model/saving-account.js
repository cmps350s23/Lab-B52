import BankAccount from "./bank-account.js";

export default class SavingAccount extends BankAccount {
    static minBalance = 1000
    static benefitPercentage = 0.6

    constructor(balance) {
        super(balance)
    }

    distributeBenefit() {
        const balance = this.getBalance()
        balance += balance * benefitPercentage
        this.setBalance(balance)
    }

    toString() {
        return `
            ${super.toString()}
            minBalance : ${SavingAccount.minBalance}
            benefitPercentage : ${SavingAccount.benefitPercentage}
        `
    }
}
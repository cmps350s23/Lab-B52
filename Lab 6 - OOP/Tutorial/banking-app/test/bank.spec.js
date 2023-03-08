//npm i mocha chai -d
import { expect } from "chai";
import {
    deposit,
    withdraw,
    sumBalance,
    getAccount
} from "../bank.js";

describe("Testing the bank", () => {
    it("Testing the deposit", () => {
        const account = getAccount(123)  //500
        deposit(account.accountNo, 500)
        const newBalance = getAccount(account.accountNo).balance
        expect(newBalance).equals(1000)
    })

    it("Testing the withdraw", () => {
        const account = getAccount(123)
        withdraw(account.accountNo, 600)
        const newBalance = getAccount(account.accountNo).balance

        expect(newBalance).equals(400)
    })
})




import { log } from 'console'
import fs from 'fs-extra'
import { nanoid } from 'nanoid'
import path from 'path'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// DATABASE_URL="file:./dev.db"

export default class AccountsRepo {
    constructor() {
        this.filePath = path.join(process.cwd(), 'app/data/accounts.json')
    }

    async getAccounts(type) {
        try {
            if (type == 'Saving' || type == 'Current')
                return await prisma.account.findMany({ where: { acctType: type } })

            return await prisma.account.findMany()

        }
        catch (err) {
            console.log(err);
            return { error: err.message }
        }

    }

    async addAccount(account) {
        try {
            console.log(account);
            return await prisma.account.create({ data: account })
        } catch (error) {
            return { error: error.message }
        }
    }

    async updateAccount(account, accountNo) {
        try {
            return await prisma.account.update({
                where: { accountNo },
                data: account
            })
        } catch (err) {
            return { error: err.message }
        }
    }

    async getAccount(accNo) {
        try {
            return await prisma.account.findUnique({ where: { accountNo: accNo } })
        } catch (err) {
            return { error: err.message }
        }
    }

    async deleteAccount(accNo) {
        try {
            return await prisma.account.delete({ where: { accountNo: accNo } })
            return "deleted successfully"
        } catch (err) {
            console.log(err);
            return "Unable to delete account because it does not exist"
        }

    }

    async addTransaction(transaction, accountNo) {

        try {
            const account = await this.getAccount(accountNo)
            console.log('before', transaction);

            console.log(transaction);

            if (transaction.transType == 'Deposit')
                account.balance += transaction.amount;
            else
                account.balance -= transaction.amount;

            await this.updateAccount(account, accountNo)
            const newTransaction = await prisma.transaction.create({ data: transaction })
            console.log(newTransaction);

            return newTransaction

        } catch (err) {
            return {
                issue: 'unable to execute the transaction successful',
                reason: err.message
            }
        }
    }

}


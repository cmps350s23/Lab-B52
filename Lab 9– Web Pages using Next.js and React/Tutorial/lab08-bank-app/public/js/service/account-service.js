const baseUrl = '/api/accounts'

class AccountService {
    //returns all the accounts depending on the type the user selected
    async getAccounts(acctType) {
        const response = await fetch(`/api/accounts?type=${acctType}`)
        return await response.json()
    }

    async deleteAccount(accountNo) {
        const response = await fetch(`/api/accounts/${accountNo}`, {
            method: 'DELETE'
        })
    }

    async addAccount(account) {

        const response = await fetch('/api/accounts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(account)
        })
    }

    async updateAccount(account) {
        const response = await fetch(`/api/accounts/${account.accountNo}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(account)
        })
    }

    async addTrans(trans) {
        console.log(trans);
        const response = await fetch(`/api/accounts/${trans.accountNo}/trans`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(trans)
        })
    }
}

export default new AccountService()
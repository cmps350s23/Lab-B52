const baseUrl = '/api/accounts'

class AccountRepo {
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

    }

    async addTrans(trans) {

    }
}

export default new AccountRepo()
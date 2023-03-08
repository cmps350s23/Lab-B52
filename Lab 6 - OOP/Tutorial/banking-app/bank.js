// npm init
// CRTL + J

const accounts = [
    { accountNo: 123, balance: 500, type: "Saving" },
    { accountNo: 234, balance: 4000, type: "Current" },
    { accountNo: 345, balance: 35000, type: "Current" },
    { accountNo: 456, balance: 60000, type: "Saving" },
]

export function display() {
    console.log(accounts);
}

export function getAccount(accountNo) {
    return accounts.find(acc => acc.accountNo == accountNo)
}

export function deposit(accountNo, amount) {
    const index = accounts.findIndex(acc => acc.accountNo == accountNo)
    if (index >= 0)
        accounts[index].balance += amount
    else
        console.log('Account does not exit');

}


export function withdraw(accountNo, amount) {

    const account = accounts.find(acc => acc.accountNo == accountNo)
    if (account)
        account.balance -= amount
    else
        console.log('Account does not exit');
}

export function add(account) {
    accounts.push(account)
}

export function sumBalance() {
    return accounts.reduce((a, b) => a + b.balance, 0)
}

export function toJSON() {
    return JSON.stringify(accounts)
}

export function fromJSON(jsonAccounts) {
    return JSON.parse(jsonAccounts)
}




























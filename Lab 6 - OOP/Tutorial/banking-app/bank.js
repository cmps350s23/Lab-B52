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

export function deposit(accountNo, amount) {
    // const index = accounts.findIndex(acc => acc.accountNo == accountNo)
    // if (index >= 0)
    //     accounts[index].balance += amount
    // else
    //     console.log('Account does not exit');


    const account = accounts.find(acc => acc.accountNo == accountNo)
    if (account)
        account.balance += amount
    else
        console.log('Account does not exit');
}

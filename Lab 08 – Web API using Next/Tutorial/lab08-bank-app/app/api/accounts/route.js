export async function GET(request) {
    const accounts = [
        {
            "accountNo": 2002,
            "acctType": "Saving",
            "balance": 8000,
            "minimumBalance": 1000
        },
        {
            "accountNo": 2001,
            "acctType": "Current",
            "balance": 18000,
            "minimumBalance": 1000
        }
    ]

    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const filteredAccount = accounts.filter(account => account
        .acctType.toLowerCase() === type.toLowerCase())

    return Response.json(filteredAccount)
}




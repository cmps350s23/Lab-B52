import AccountsRepo from "../../accounts-repo"
const repo = new AccountsRepo()

// Just test here all your methods
export async function GET(request) {
    const query = await request.json()
    const accounts = await repo.getReport(query)
    return Response.json(accounts)
}

export async function POST(request) {

    const query = await request.json()
    // console.log(query);
    const report = await repo.searchOwner('John')
    console.log(report);
    return Response.json(report)

}
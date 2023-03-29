import AccountsRepo from "../accounts-repo";
const repo = new AccountsRepo();

export async function GET(request, { params }) {
    const { accNo } = params;
    const account = await repo.getAccount(accNo);
    return Response.json(account, { status: 200 });
}

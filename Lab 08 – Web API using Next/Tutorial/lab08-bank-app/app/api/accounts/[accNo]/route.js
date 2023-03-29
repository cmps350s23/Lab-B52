import AccountsRepo from "../accounts-repo";
const repo = new AccountsRepo();

export async function GET(request, { params }) {
    const { accNo } = params;
    const account = await repo.getAccount(accNo);
    return Response.json(account, { status: 200 });
}

export async function PUT(request) {
    const account = await request.json()
    const message = await repo.updateAccount(account)
    return Response.json({ message })
}


export async function DELETE(request, { params }) {
    const { accNo } = params;
    const message = await repo.deleteAccount(accNo);
    return Response.json({ message }, { status: 200 });
}
import AccountsRepo from '../../accounts-repo.js'
const repo = new AccountsRepo();

export async function GET(request, { params }) {
    const { accNo } = params;
    console.log(params);
    return new Response('Hi');
}

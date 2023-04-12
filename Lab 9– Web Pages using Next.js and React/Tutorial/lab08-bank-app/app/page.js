import { Inter } from 'next/font/google'
import AccountsRepo from './api/accounts/accounts-repo'
import Accounts from './accounts/Accounts'

const accountsRepo = new AccountsRepo()

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const accounts = await accountsRepo.getAccounts()

  return (
    <>
      <Accounts initialAccounts={accounts}></Accounts>
    </>
  )
}

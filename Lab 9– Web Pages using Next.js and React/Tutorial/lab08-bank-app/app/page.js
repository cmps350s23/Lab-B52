import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  return (
    <>
      <h1>Welcome to the home page</h1>
    </>
  )
}

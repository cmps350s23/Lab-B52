import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" />
      </head>
      <body>
        <nav>
          <ul>
            <li>Alpha Bank</li>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li >
              <a href="#">Add Account</a>
            </li>
            <li >
              <a href="#">Add Transaction</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}

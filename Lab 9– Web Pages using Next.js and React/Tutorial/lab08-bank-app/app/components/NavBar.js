import React from 'react'
import Link from 'next/link'

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>Alpha Bank</li>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li >
                    <Link href="/accounts/add">Add Account</Link>
                </li>
                <li >
                    <Link href="/accounts/trans">Add Transaction</Link>
                </li>
            </ul>
        </nav>
    )
}

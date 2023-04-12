import React from 'react'

export default function Accounts({ initialAccounts }) {
    return (
        <div>
            <label htmlFor="acctType">Account Type</label>
            <select id="acctType" className="dropdown">
                <option value="All">All</option>
                <option value="Saving">Saving</option>
                <option value="Current">Current</option>
            </select>
        </div>
    )
}

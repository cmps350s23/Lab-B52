import React from 'react'
import styles from '../page.module.css'

export default function Accounts({ initialAccounts }) {
    return (
        <div>
            <label htmlFor="acctType" className={styles.label}>Account Type</label>
            <select id="acctType" className={styles.dropdown}>
                <option value="All">All</option>
                <option value="Saving">Saving</option>
                <option value="Current">Current</option>
            </select>
        </div>
    )
}

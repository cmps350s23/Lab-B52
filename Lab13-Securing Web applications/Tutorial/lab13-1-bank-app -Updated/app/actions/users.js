'use server'

import { redirect } from 'next/navigation'
import * as repo from '../api/users/user-repo'

export const createUser = async (formData) => {
    const { name, email, password } = Object.fromEntries(formData.entries())
    const user = { name, email, password }
    await repo.createUser(user)
    redirect('/login')
}

export const loginUser = async (email, password) => await repo.getUser(email, password)
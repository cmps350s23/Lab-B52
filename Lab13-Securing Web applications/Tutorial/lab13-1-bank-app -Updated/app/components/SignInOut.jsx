'use client'
import { signIn, signOut, useSession } from "next-auth/react";

export default function SignInOut() {
    // const result = useSession();
    // const data = result.data
    // const session = data

    const { data: session } = useSession();
    if (session)
        return (
            <div>
                <button className="btn btn-secondary" onClick={signOut}>
                    <span class="badge bg-danger">{session.user.name}</span> Sign Out</button>
            </div>
        )

    return (
        <div> <button onClick={signIn}>  Sign In</button></div>
    )
}

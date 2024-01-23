import React from "react";
import { Link } from 'pragmate-ui/link';

export function Redirect() {
    return (
        <div className="login-app__redirect">
            <span className="redirect__span text--new-user">
                <Link href='/'>new user ?</Link>
            </span>
            <span className="redirect__span text--create">
                <Link href='/' >Create account</Link>
            </span>
        </div>
    )
}
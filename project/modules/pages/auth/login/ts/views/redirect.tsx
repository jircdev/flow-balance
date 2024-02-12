import React from "react";
import { Link } from 'pragmate-ui/link';

export function Redirect() {
    return (
        <div className="login-app__redirect">
            <span className="redirect__span text--new-user">
                <Link href='/'>¿Nuevo usuario?</Link>
            </span>
            <span className="redirect__span text--create">
                <Link href='/' >Crea una cuenta</Link>
            </span>
        </div>
    )
}
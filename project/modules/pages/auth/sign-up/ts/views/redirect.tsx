import React from "react";
import { Link } from 'pragmate-ui/link';

export function Redirect() {
    return (
        <div className="sign-up-app__redirect">
            <span className="redirect__span text--new-user">
                <Link href='/'>¿Ya eres usuario??</Link>
            </span>
            <span className="redirect__span text--create">
                <Link href='/auth/login' >Iniciar sesión</Link>
            </span>
        </div>
    )
}
import React from "react";
import { Link } from 'pragmate-ui/link';
import { Icon } from 'pragmate-ui/icons';
import { iconNotification } from "./icons";
import { Badge } from 'pragmate-ui/badge';

export function HeaderBar({label, link}) {

    return (
            <header className="header-bar">
                <section className="header-bar__section welcome">
                    <span className="text-welcome">Hola, ¡Bienvenido!</span>
                    <h2 className="label--name">{label}</h2>
                </section>
                <section className="header-bar__section notification">
                <Badge variant="primary" value={32}> 
                    <Link href={link} >
                        <Icon {...iconNotification} />
                    </Link>
                </Badge>
                </section>
            </header>
    );
}
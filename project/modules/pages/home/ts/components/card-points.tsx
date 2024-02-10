import React from "react";
import { Icon } from 'pragmate-ui/icons';

export function CardPoint({label, icon, background}) {

    const cls = background ? `card-point ${background}` : "card-point"; 
    return (
        <div className={cls}>
            <Icon {...icon} className="xs" />
            <label className="card-point__label">{label}</label>
        </div>
    )
}
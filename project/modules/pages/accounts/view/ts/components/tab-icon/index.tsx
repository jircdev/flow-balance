import React from "react";
import { IconButton } from 'pragmate-ui/icons';
import { ITabIcon } from "./types";

export function TabIcon({icon, label, onClick} : ITabIcon) {

    const handleClickIcon = () => {
        if(onClick) {
            onClick();
        }
    }
    return (
        <div className="tab-icon">
            <div className="content-border--icon">
                <IconButton className="md" icon={icon} onClick={handleClickIcon} />
            </div>
            <span className="tab-icon__span">
                {label}
            </span>
        </div>
    )
}
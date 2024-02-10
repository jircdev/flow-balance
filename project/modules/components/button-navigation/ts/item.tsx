import React from "react";
import { IconButton } from 'pragmate-ui/icons';
import {routing} from '@beyond-js/kernel/routing';
import { useButtonContext } from "./context";

export function ItemIconButton({label, icon, link, iconBox}) {

    const { handleTabClick } = useButtonContext();

    const handleGoRedirection = () => {
        if(link) {
            routing.pushState(link);
        }
        handleTabClick();
    }

    const typeIconButton = iconBox ? <IconButton {...iconBox} className="md"/> : <IconButton icon={icon} className="md"/>
    return (
        <div
          key={label}
          className={`buttom-nav-item ${routing.uri.pathname === link ? 'active' : ''}`}
          onClick={handleGoRedirection}
        >
          <IconButton {...iconBox} className="xs"/>
          <span className="buttom-nav-item__span">
            {label}
          </span>
        </div>
    )
}
import React from "react";
import { IconButton } from 'pragmate-ui/icons';
import {routing} from '@beyond-js/kernel/routing';
import { useButtonContext } from "./context";

export function ItemIconButton({label, icon, link}) {

    const { handleTabClick } = useButtonContext();

    const handleGoRedirection = () => {
        if(link) {
            routing.pushState(link);
        }
        handleTabClick();
    }

    return (
        <div
          key={label}
          className={`buttom-nav-item ${routing.uri.pathname === link ? 'active' : ''}`}
          onClick={handleGoRedirection}
        >
          <IconButton icon={icon} className="md"/>
          <span className="buttom-nav-item__span">
            {label}
          </span>
        </div>
    )
}
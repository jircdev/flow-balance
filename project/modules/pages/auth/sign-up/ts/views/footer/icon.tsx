import React from "react";
import { Icon } from "pragmate-ui/icons";

interface IProps {
    onClick?: Function,
    icon?: {},
}

export /* bundle */ function IconBackground({onClick, icon} : IProps) {

    const handleClick = () => {
        if(onClick) {
            onClick()
        }
    }

    return (
        <div className="footer__icon">
            <Icon className="md" {...icon} onClick={handleClick}/>
        </div>
    )
}
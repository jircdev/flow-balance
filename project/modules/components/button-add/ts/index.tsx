import React from "react";
import { IconButton } from "pragmate-ui/icons";

interface IProps {
    onClick?: Function,
    icon?: string,
}

export /* bundle */ function ButtonAdd({onClick, icon = 'add'} : IProps) {

    const handleClick = () => {
        if(onClick) {
            onClick()
        }
    }

    return (
        <div className="container__btn-add--border">
            <IconButton className="lg" icon={icon} onClick={handleClick}/>
        </div>
    )
}
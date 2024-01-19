import React from "react";
import { IconButton } from "pragmate-ui/icons";

interface IProps {
    onClick?: Function
}

export /* bundle */ function ButtonAdd({onClick} : IProps) {

    const handleClick = () => {
        if(onClick) {
            onClick()
        }
    }
    return (
        <div className="container__btn-add--border">
            <IconButton className="lg" icon="add" onClick={handleClick}/>
        </div>
    )
}
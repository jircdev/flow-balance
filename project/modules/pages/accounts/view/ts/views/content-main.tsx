import React from "react";
import { IconButton } from 'pragmate-ui/icons';

export function ContentMain() {
    return (
        <div className="content-main--money">
            <div className="content-border-icon--main">
                <IconButton className="md" icon='pay' />
            </div>
            <span className="content-main--money__span">Main</span>
            <strong className="total-money">17$</strong>
        </div>
    )
}
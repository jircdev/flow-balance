import React from 'react';
import { IconButton } from "pragmate-ui/icons";
import { BaseToolbar } from 'flow-balance/toolbar';
import { Button } from 'pragmate-ui/components';
import {routing} from "@beyond-js/kernel/routing";

interface INavForm {
    onClick?: Function
}

export function NavForm({onClick}: INavForm) {

    const handleRedirect = () => routing.pushState('/contact/list');

    const handleClick = () => {
        if(onClick) {
            onClick()
        }
    }
    return (
        <>
            <BaseToolbar>
                <div className="container__nav-form">
                    <section className="content-header">
                        <IconButton className='xs' onClick={handleRedirect} icon='close' />
                        <h3 className="nav-form__h3">Create Contact</h3>
                    </section>
                    <Button variant="primary" onClick={handleClick}>Save</Button>
                </div>
            </BaseToolbar>
        </>
    )
}
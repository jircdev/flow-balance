import React from 'react';
import { IconButton } from "pragmate-ui/icons";
import { BaseToolbar } from 'flow-balance/toolbar';
import { Button } from 'pragmate-ui/components';
import {routing} from "@beyond-js/kernel/routing";
import { ThemeSwitcher } from 'flow-balance/theme-swicher';

interface INavForm {
    onClick?: Function
}

export function NavForm({onClick}: INavForm) {

    const handleRedirect = () => routing.pushState('/contact/list');
    return (
        <>
            <BaseToolbar back={true}>
                <div className="container__nav-form">
                    <section className="content-header">
                        <h4 className="nav-form__h4">Create Contact</h4>
                        <ThemeSwitcher />
                    </section>
                </div>
            </BaseToolbar>
        </>
    )
}
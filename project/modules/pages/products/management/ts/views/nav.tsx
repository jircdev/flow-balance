import React from 'react';
import { BaseToolbar } from 'flow-balance/toolbar';
import { ThemeSwitcher } from 'flow-balance/theme-swicher';

interface INavForm {
    onClick?: Function
}

export function Navigation({onClick}: INavForm) {

    return (
        <>
            <BaseToolbar back={true}>
                <div className="container__nav-form">
                    <section className="content-header">
                        <h4 className="nav-form__h4">Add Products</h4>
                        <ThemeSwitcher />
                    </section>
                </div>
            </BaseToolbar>
        </>
    )
}
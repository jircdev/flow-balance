import React from "react";
import { menuItems } from '../menu-items';
import { ThemeSwitcher } from 'flow-balance/theme-swicher';
import { BaseToolbar } from 'flow-balance/toolbar';
import { Menu } from "flow-balance/menu";
import { Input } from 'pragmate-ui/form';

export function NavAccounts() {
    return (
        <>
            <BaseToolbar>
            <div className="container_nav-account">
				<Menu items={menuItems} title="Title" />
				<ThemeSwitcher />
            </div>
			</BaseToolbar>
        </>
    )
}
import React from "react";
import { menuItems } from './menu-items';
import { ThemeSwitcher } from 'flow-balance/theme-swicher';
import { BaseToolbar } from 'flow-balance/toolbar';
import { Menu } from "flow-balance/menu";
import { Input } from 'pragmate-ui/form';

export function NavList() {
    return (
        <>
            <BaseToolbar>
				<Menu items={menuItems} title="Gabriel Castro" />
				<Input type="text" placeholder="search contact..." value='' />
				<ThemeSwitcher />
			</BaseToolbar>
        </>
    )
}
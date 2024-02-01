import React from "react";
import { menuItems } from './menu-items';
import { ThemeSwitcher } from 'flow-balance/theme-swicher';
import { BaseToolbar } from 'flow-balance/toolbar';
import { Menu } from "flow-balance/menu";
import { FormFilter } from "./form-search";

export function NavList() {


    return (
        <>
            <BaseToolbar>
				<Menu items={menuItems} title="List" />
                <FormFilter />
				<ThemeSwitcher />
			</BaseToolbar>
        </>
    )
}
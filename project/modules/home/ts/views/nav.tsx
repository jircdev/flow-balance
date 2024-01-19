import React from "react";
import { menuItems } from '../menu-items';
import { ThemeSwitcher } from 'flow-balance/theme-swicher';
import { BaseToolbar } from 'flow-balance/toolbar';
import { Menu } from "flow-balance/menu";

export function NavHome() {
    return (
        <>
           <BaseToolbar>
            <div className="container_nav-home">
				<Menu items={menuItems} title="Title" />
				<ThemeSwitcher />
            </div>
			</BaseToolbar>
        </>
    )
}
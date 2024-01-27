import React from "react";
import { menuItems } from '../menu-items';
import { ThemeSwitcher } from 'flow-balance/theme-swicher';
import { BaseToolbar } from 'flow-balance/toolbar';
import { Menu } from "flow-balance/menu";

export function NavProduct() {
    return (
        <>
           <BaseToolbar>
            <div className="container_nav-products">
				<Menu items={menuItems} title="Title" />
                <h4 className="nav-products__h4">Products</h4>
				<ThemeSwitcher />
            </div>
			</BaseToolbar>
        </>
    )
}
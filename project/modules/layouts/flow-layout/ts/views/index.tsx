import * as React from 'react';
import { menuItems } from './menu-items';
import { Menu } from 'flow-balance/menu';
import { ThemeSwitcher } from 'flow-balance/theme-swicher';
import { BaseToolbar } from 'flow-balance/toolbar';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'beyond-layout-children': any;
		}
	}
}

export function Layout() {
	return (
		<main>
			<BaseToolbar>
				<Menu items={menuItems} title='Title' />
				<ThemeSwitcher />
			</BaseToolbar>
			<beyond-layout-children />
		</main>
	);
}

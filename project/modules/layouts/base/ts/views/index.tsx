import * as React from 'react';
import { Menu } from 'flow-balance/menu';
import { menuItems } from './menu-items';
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
	return <beyond-layout-children />;
}

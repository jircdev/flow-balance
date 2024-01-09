import * as React from 'react';
import { Menu } from "pragmate-ui/menu"
import { menuItems } from './menu-items';

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
			<Menu items={menuItems} title="Title" />
			<beyond-layout-children />
		</main>
	);
}

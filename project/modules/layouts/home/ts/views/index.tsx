import * as React from 'react';
import { BottomBar } from 'flow-balance/components/bottom-bar';
import { usersIcon, homeIcon, userIcon } from '../iconts';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'beyond-layout-children': any;
		}
	}
}

const items = [
	{
		label: 'Inicio',
		iconBox: homeIcon,
		link: '/',
	},
	{
		label: 'Contactos',
		iconBox: usersIcon,
		link: '/contact/list',
	},
	{
		label: 'Configuración',
		iconBox: userIcon,
		link: '/configuracion',
	},
];

export function Layout() {
	return (
		<main>
			<beyond-layout-children />
			<BottomBar icons={items} />
		</main>
	);
}

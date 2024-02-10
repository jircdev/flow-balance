import * as React from 'react';
import { ButtomNavigator } from 'flow-balance/components/button-navigation';
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
	}
  ];

export function Layout() {
	return (
		<main>
			<beyond-layout-children />
			<ButtomNavigator icons={items} />
		</main>
	);
}

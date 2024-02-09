import * as React from 'react';
import { ButtomNavigator } from 'flow-balance/components/button-navigation';

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
	  icon: 'home',
	  link: '/',
	},
	{
	  label: 'Perfil',
	  icon: 'profile',
	  link: '/perfil',
	},
	{
	  label: 'Configuración',
	  icon: 'settings',
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

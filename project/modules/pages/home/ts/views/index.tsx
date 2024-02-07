import * as React from 'react';
import { Icon } from 'pragmate-ui/icons';
export /*bundle*/
function View(): JSX.Element {
	return (
		<main className='page-container'>
			<div className='card'>
				<section className='available-amount'>5000</section>
			</div>

			<ul className='main-home__menu'>
				<li>
					<Icon icon='home' />
					Registro
				</li>
				<li>
					<Icon icon='home' />
					Transferir
				</li>
				<li>
					<Icon icon='users' />
					Contactos
				</li>
			</ul>
		</main>
	);
}

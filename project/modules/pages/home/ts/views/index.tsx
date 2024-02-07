import * as React from 'react';
import { Icon } from 'pragmate-ui/icons';
import { PageContainer } from 'flow-balance/components/ui';
import { Link } from 'pragmate-ui/components';
export /*bundle*/
function View(): JSX.Element {
	return (
		<PageContainer>
			<div className='home-header__card'>
				<article className='flex-container flex-space-between flex-vertical'>
					<section className='amount-available'>
						Disponible
						<span className='amount'> 5000</span>
					</section>
					<section>
						<Link href='/transactions/list'>Ir a movimientos</Link>
					</section>
				</article>
				<ul className='card-menu__items'>
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
			</div>
		</PageContainer>
	);
}

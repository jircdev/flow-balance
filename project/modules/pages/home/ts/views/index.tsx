import * as React from 'react';
import { PageContainer } from 'flow-balance/components/ui';
import { BalanceCard } from './balance-card';
import { CardPoint } from '../components/card-points';
import { iconSend } from '../icons';

export /*bundle*/
function View({store}): JSX.Element {

	  
	return (
		<PageContainer>

			<BalanceCard />
			<section className="container__card-points">
				<CardPoint label="Ingresos" icon={iconSend} background="secondary-container"/>
				<CardPoint label="Egresos" icon={iconSend} background="tertiary-container"/>
				<CardPoint label="Articulo" icon={iconSend} background="surface"/>
			</section>
		</PageContainer>
	);
}

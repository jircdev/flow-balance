import * as React from 'react';
import { PageContainer } from 'flow-balance/components/ui';
import { BalanceCard } from './balance-card';
import { CardPoint } from '../components/card-points';
import { iconSend } from '../icons';
import { History } from './history';

export /*bundle*/
function View({store}): JSX.Element {

	  
	return (
		<PageContainer>

			<BalanceCard />
			<section className="container__card-points">
				<CardPoint label="Deudas" icon={iconSend} background="secondary-container"/>
				<CardPoint label="Cobros" icon={iconSend} background="tertiary-container"/>
				<CardPoint label="Ahorro" icon={iconSend} background="surface"/>
			</section>
			<History />
		</PageContainer>
	);
}

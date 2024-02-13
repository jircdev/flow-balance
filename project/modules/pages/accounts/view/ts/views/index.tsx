import * as React from 'react';
import { TotalCount } from './total';
import { TabIcon } from '../components/tab-icon';
import { ContentMain } from './content-main';

export /*bundle*/
function View() {
	const [tab, setTab] = React.useState<number>(0);


	const labelsTab = {
		history: 'transaction history',
		transactions: 'new transfer'
	};

	const handleTabChange = (event, index) => {
		setTab(index);
	};

	
	return (
		<>
			<main className="page__container-account">
				<TotalCount />
				<div className="section-content-tab">
					<TabIcon icon='detail' label={labelsTab.history} />
					<TabIcon icon='operations' label={labelsTab.transactions} />
				</div>
				<ContentMain />
			</main>
		</>
	);
}

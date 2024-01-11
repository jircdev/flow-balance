import * as React from 'react';
import { TotalCount } from './total';
import { TabsContainer, Tabs, Tab, Panes } from 'pragmate-ui/tabs';
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

	const panes = [
		{ tab: 'Pestaña 1', content: <div>Contenido de la pestaña 1</div> },
		{ tab: 'Pestaña 2', content: <div>Contenido de la pestaña 2</div> },
	]
	return (
		<main className="page__container-account">
			<TotalCount />
			{/* <TabsContainer panes={panes} active={tab} onChange={handleTabChange}>
				<Tabs>
					<Tab>
						<IconButton icon='home' onClick={() => setTab(0)} />
					</Tab>
					<Tab>
						<IconButton icon='search' onClick={() => setTab(1)} />
					</Tab>
				</Tabs>
			</TabsContainer> */}

			
			<div className="section-content-tab">
				<TabIcon icon='detail' label={labelsTab.history} />
				<TabIcon icon='operations' label={labelsTab.transactions} />
			</div>
			{/* <ContentMain /> */}
		</main>
	);
}

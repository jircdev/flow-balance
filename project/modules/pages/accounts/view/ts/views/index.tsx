import * as React from 'react';
import { TotalCount } from './total';
import { TabsContainer, Tabs, Tab, Panes } from 'pragmate-ui/tabs';
import { IconButton } from 'pragmate-ui/icons';

export /*bundle*/
function View() {
	const [tab, setTab] = React.useState<number>(0);

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
			<TabsContainer panes={panes} active={tab} onChange={handleTabChange}>
				<Tabs>
					<Tab>
						<IconButton icon='home' onClick={() => setTab(0)} />
					</Tab>
					<Tab>
						<IconButton icon='search' onClick={() => setTab(1)} />
					</Tab>
				</Tabs>
			</TabsContainer>
		</main>
	);
}

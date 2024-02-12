import * as React from 'react';
import { Empty } from 'pragmate-ui/empty';
import { ButtonAdd } from 'flow-balance/button-add';

export function EmptyContacts({ store }) {
	return (
		<>
			<main className='center-empty'>
				<Empty text='Add your contacts' icon='user' />
				{/* <ButtonAdd onClick={store.redirectManagement} icon='user' /> */}
			</main>
		</>
	);
}



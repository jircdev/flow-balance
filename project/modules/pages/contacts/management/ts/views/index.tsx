import React from 'react';
import { FormContact } from './form';

export function View({ store }) {
	return (
		<>
			<main className='page_container-form'>
				<section className='container-form__section'>
					<FormContact store={store} />
				</section>
			</main>
		</>
	);
}

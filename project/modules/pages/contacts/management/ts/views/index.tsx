import React from 'react';
import { FormContact } from './form';
import { NavForm } from './nav';

export function View({ store }) {
	return (
		<>
			<NavForm />
			<main className='page_container-form'>
				<section className='container-form__section'>
					<FormContact store={store} />
				</section>
			</main>
		</>
	);
}

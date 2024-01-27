import React from 'react';
import { useFields } from 'flow-balance/hooks';
import { FormContact } from './form';
import { CreateProductsContext } from './context';
import { Navigation } from './nav';

export function View({store}) {

	const value = {store}
	return (
	<CreateProductsContext.Provider value={value}>
		<Navigation />
		<main className="page_container-form">
			<FormContact />
		</main>
	</CreateProductsContext.Provider>
	);
}

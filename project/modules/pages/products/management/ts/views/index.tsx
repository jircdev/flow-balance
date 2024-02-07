import React from 'react';
import { FormContact } from './form';
import { CreateProductsContext } from './context';

export function View({store}) {

	const value = {store}
	return (
	<CreateProductsContext.Provider value={value}>
		<main className="page_container-form">
			<FormContact />
		</main>
	</CreateProductsContext.Provider>
	);
}

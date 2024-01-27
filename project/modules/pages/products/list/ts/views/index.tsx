import * as React from "react";
import { CreateProductsContext } from "./context";
import { ButtonAdd } from 'flow-balance/button-add';
import { NavProduct } from "./nav";
import { routing } from '@beyond-js/kernel/routing';
import { EmptyProducts } from "./empty-products";
export /*bundle*/
function View({store}): JSX.Element {

	const value = {};

	console.log(store.collection.length );
	if(store.collection.length === 0) return <EmptyProducts store={store}/>;
	return (
		<CreateProductsContext.Provider value={value}>
			<NavProduct />	
			<div className="page__container-contact">

			</div>
			<ButtonAdd onClick={store.addProducts} icon='box' />
		</CreateProductsContext.Provider>
	);
}
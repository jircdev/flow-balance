import * as React from "react";
import { CreateProductsContext } from "./context";
import { ButtonAdd } from 'flow-balance/button-add';
import { NavProduct } from "./nav";
import { EmptyProducts } from "./empty-products";
import { useBinder } from "@beyond-js/react-18-widgets/hooks";
import { ProductElement } from "../components/products";
import { LoadingPage } from 'flow-balance/loading-page';

export /*bundle*/
function View({store}): JSX.Element {

	const [storeValue, setStoreValue] = React.useState({});

	useBinder([store], () => setStoreValue({}));
	
	const output = store.collection.items.map((item, index) => (
        <ProductElement
            key={index} 
            name={item.name}
            price={item.price}
            description={item.description}
            quantity={item.quantity}
        />
    ));
	
	const value = {store};
	
	if (store.fetching) return <LoadingPage />;
	if(store.collection.length === 0) return <EmptyProducts store={store}/>;
	
	return (
		<CreateProductsContext.Provider value={value}>
			<NavProduct />	
			<div className="page__container-products">
				{output}			
			</div>
			<ButtonAdd onClick={store.addProducts} icon='box' />
		</CreateProductsContext.Provider>
	);
}
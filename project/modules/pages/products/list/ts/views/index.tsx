import * as React from "react";
import { CreateProductsContext } from "./context";
import { Table } from "./table";
import { NavProduct } from "./nav";
export /*bundle*/
function View(): JSX.Element {
	const value = {};
  return (
	<CreateProductsContext.Provider value={value}>
		<NavProduct />	
		<div className="page__container-contact">
		
		</div>
	</CreateProductsContext.Provider>
  );
}
import React from "react";
import { useProductsContext } from "./context";

export function useForm({store}) {

	const [values, setValues] = React.useState({
		name: '',
		price: '',
		quantity: '',
		description: '',
	  });
	
	  
	  const handleInputChange = (event) => {
		const { name, value } = event.target;
		setValues({
		  ...values,
		  [name]: value,
		});
	  };

	  const handleSaveProducts = () => {
		const products = {...values}
		store.saveProducts(products);
	  }
      return {values, setValues, handleInputChange, handleSaveProducts}
}
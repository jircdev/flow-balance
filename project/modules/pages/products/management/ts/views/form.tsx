import React from "react";
import { Input } from 'pragmate-ui/form';
import { Toasts } from 'pragmate-ui/toast';
import { Form } from 'pragmate-ui/form';
import { Button } from 'pragmate-ui/components';
import { useForm } from "./use-form";
import { useProductsContext } from "./context";
import { ButtonAdd } from 'flow-balance/button-add';

export function FormContact() {
	
	const { store } = useProductsContext();
    const {values, handleInputChange, handleSaveProducts} = useForm({store});

    return (
        <Form className="form-products" onSubmit={handleSaveProducts}>
			<div className="contents-elements">
			  <Input
				type="text"
				name="name"
				floating
				label='Name'
				value={values.name}
				onChange={handleInputChange}
			  />
			  <Input
				className="has-icon"
				name="price"
				type="number"
				floating
				value={values.price}
				onChange={handleInputChange}
				label="Price"
			  />
			  <Input
				className="has-icon"
				name="quantity"
				type="number"
				value={values.quantity}
				floating
				onChange={handleInputChange}
				label="Quantity"
			  />
			  <Input
				className="has-icon"
				name="description"
				value={values.description}
				floating
				onChange={handleInputChange}
				label="Description"
			  />
			  <Toasts position={{ bottom: '2rem', right: '2rem' }} />
			</div>
			<ButtonAdd icon='check' />
		  </Form>
    )
}
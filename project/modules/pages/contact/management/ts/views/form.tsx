import React from "react";
import { Input } from 'pragmate-ui/form';
import { Toasts } from 'pragmate-ui/toast';
import { Form } from 'pragmate-ui/form';
import { Button } from 'pragmate-ui/components';

export function FormContact() {

    const [dataFields, setDataFields] = React.useState({
		name: '',
		email: '',
		phone: '',
		description: '',
	  });
	
	  const handleInputChange = (event) => {
		const { name, value } = event.target;
		setDataFields({
		  ...dataFields,
		  [name]: value,
		});
	  };

    return (
        <Form className="content-form">
			<div className="form-group">
			  <Input
				type="text"
				required
				name="name"
				value={dataFields.name}
				onChange={handleInputChange}
				placeholder="Name"
			  />
			  <Input
				className="has-icon"
				required
				name="email"
				value={dataFields.email}
				onChange={handleInputChange}
				placeholder="Email"
			  />
			  <Input
				className="has-icon"
				name="phone"
				value={dataFields.phone}
				onChange={handleInputChange}
				placeholder="Phone"
			  />
			  <Input
				className="has-icon"
				name="description"
				value={dataFields.description}
				onChange={handleInputChange}
				placeholder="Description"
			  />
			  <Toasts position={{ bottom: '2rem', right: '2rem' }} />
			</div>
            <Button variant="secondary">Save !</Button>
		  </Form>
    )
}
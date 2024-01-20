import React from "react";
import { Input } from 'pragmate-ui/form';
import { Toasts } from 'pragmate-ui/toast';
import { Form } from 'pragmate-ui/form';
import { TakeImage } from 'flow-balance/take-image';

export function FormContact() {

    const [dataFields, setDataFields] = React.useState({
		name: '',
		email: '',
		phone: '',
		description: '',
	  });

	  /* const saveContact = () => {
		const newContact = {
		  id: data.length + 1, 
		  name: dataFields.name,
		  email: dataFields.email,
		  phone: dataFields.phone,
		  description: dataFields.description,
		};
	  
		const updatedData = [...data, newContact];
		console.log(updatedData);
	  
		setStateGlobal(updatedData);
	  }; */
	
	  const handleInputChange = (event) => {
		const { name, value } = event.target;
		setDataFields({
		  ...dataFields,
		  [name]: value,
		});
	  };
	  const defaultImage = `${globalThis.baseDir}assets/user.png`;
    return (
        <Form className="content-form">
			<TakeImage
					identifier={5}
					entity=''
					previousImg={defaultImage}
				/>
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
		  </Form>
    )
}
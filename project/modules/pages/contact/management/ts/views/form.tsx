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
		  id: data.length + 1, // Genera un nuevo ID (puedes usar una lógica diferente si lo prefieres)
		  name: dataFields.name,
		  email: dataFields.email,
		  phone: dataFields.phone,
		  description: dataFields.description,
		};
	  
		// Actualiza la lista de contactos
		const updatedData = [...data, newContact];
	  
		// Puedes imprimir la nueva lista para verificar
		console.log(updatedData);
	  
		// Aquí podrías guardar la nueva lista en tu estado global o en tu backend
		// setStateGlobal(updatedData);
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
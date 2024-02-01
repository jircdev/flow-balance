import React from 'react';
import { useBinder } from '@beyond-js/react-18-widgets/hooks';
export function useForm({ store }) {
	
	const [values, setValues] = React.useState({
		name: '',
		email: '',
		phone: '',
	});
	
	const onChange = event => {
		const { name, value } = event.target;
		setValues({
		  ...values,
		  [name]: value,
		});
	};

	const onSubmit = event => {
		const contacts = {...values};
		store.saveContacts(contacts);
	};
	return {
		values,
		onChange,
		onSubmit,
	};
}

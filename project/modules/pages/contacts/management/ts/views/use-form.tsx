import React from 'react';
import { useBinder } from '@beyond-js/react-18-widgets/hooks';
export function useForm({ store }) {
	const [values, setValues] = React.useState({
		name: '',
		email: '',
		phone: '',
		...store.model.getProperties(),
	});
	useBinder([store.model], () => {
		console.log('ejecuto cambio', store.model.getProperties());

		setValues({
			...values,
			...store.model.getProperties(),
		});
	});
	const onChange = event => {
		const { name, value } = event.target;
		console.log(1, name, value, event.target);
		// store.model[name] = value;
		store.model.set({ [name]: value });
	};

	const onSubmit = event => {
		event.preventDefault();
		store.model.publish();
	};
	return {
		values,
		onChange,
		onSubmit,
	};
}

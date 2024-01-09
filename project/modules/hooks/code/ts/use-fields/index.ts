import { useBinder } from '../binder';
import React, { useEffect, useState, ChangeEvent } from 'react';
import { getInput, getCheckbox, getRadio, getSelect } from './types';
export /*bundle */ function useFields(object) {

	const [item, setItem] = useState(object);
	const [fields, setFields] = useState<Record<string, string>>(item.getProperties());

	useBinder([item], () => setFields(item.getProperties()));
	useEffect(() => {
	
		setItem(object)
		setFields(object.getProperties())
	}, [object])
	const disabled = { disabled: false };
	if (item.fetching || item.processing) disabled.disabled = true;
	const onFieldChange = (event: ChangeEvent<any>): void => {
		const { value, name, type, checked } = event.target;

		const propertyValue = type === 'checkbox' ? checked : value;
		item.set({ [name]: propertyValue });
	};

	return {
		getInput: (name?: string, label?: string, id?: string): getInput => ({
			name,
			value: fields[name] ?? '',
			onChange: onFieldChange,
			label: label ?? name,
			id: name ?? id,
			...disabled,
		}),
		getCheckbox: (name: string): getCheckbox => ({
			name,
			checked: !!fields[name],
			onChange: onFieldChange,
			...disabled,
		}),
		getRadio: (name: string, value: string, label: string): getRadio => ({
			name,
			value,
			checked: fields[name] === value,
			onChange: onFieldChange,
			label: label ?? value,
			...disabled,
		}),
		getSelect: (name?: string): getSelect => {
			return {
				name,
				value: fields[name],
				onChange: onFieldChange,
				...disabled,
			};
		},
		fields,
	};
}

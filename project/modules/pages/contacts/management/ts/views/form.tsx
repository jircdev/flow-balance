import React from 'react';
import { Input } from 'pragmate-ui/form';
import { Toasts } from 'pragmate-ui/toast';
import { Form } from 'pragmate-ui/form';
import { useForm } from './use-form';
import { Button } from 'pragmate-ui/components';
export function FormContact({ store }) {
	const { values, onChange, onSubmit } = useForm({ store });

	return (
		<Form className='content-form'>
			<div className='form-group'>
				<Input type='text' required name='name' value={values.name} onChange={onChange} floating label='Name' />
				<Input
					className='has-icon'
					required
					name='email'
					value={values.email}
					onChange={onChange}
					floating 
					label='Email'
				/>
				<Input floating label='Phone' className='has-icon' name='phone' value={values.phone} onChange={onChange} />
				<Button onClick={onSubmit} block >Guardar</Button>
				<Toasts position={{ bottom: '2rem', right: '2rem' }} />
			</div>
		</Form>
	);
}

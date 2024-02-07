import React from 'react';
import { Input } from 'pragmate-ui/form';
import { Toasts } from 'pragmate-ui/toast';
import { Form } from 'pragmate-ui/form';
import { useForm } from './use-form';
import { Button } from 'pragmate-ui/components';
export function FormContact({ store }) {
	const { values, onChange, onSubmit } = useForm({ store });

	const defaultImage = `${globalThis.baseDir}assets/user.png`;
	return (
		<Form className='content-form'>
			<div className='form-group'>
				<Input type='text' required name='name' value={values.name} onChange={onChange} placeholder='Name' />
				<Input
					className='has-icon'
					required
					name='email'
					value={values.email}
					onChange={onChange}
					placeholder='Email'
				/>
				<Input className='has-icon' name='phone' value={values.phone} onChange={onChange} placeholder='Phone' />
				<Button onClick={onSubmit}>Guardar</Button>
				<Toasts position={{ bottom: '2rem', right: '2rem' }} />
			</div>
		</Form>
	);
}

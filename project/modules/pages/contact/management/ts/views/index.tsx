import React from 'react';
import { useFields } from 'flow-balance/hooks';
import { FormHeader } from './header';
import { FormContact } from './form';
import { NavForm } from './nav';
import { TakeImage } from 'flow-balance/take-image';

export function View() {
	  return (
		<>
		<NavForm />
		<main className="page_container-form">
			<section className="container-form__section">
				<TakeImage
					identifier={5}
					entity=''
				/>
			</section>
		</main>
		</>
	  );
}

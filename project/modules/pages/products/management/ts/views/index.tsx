import React from 'react';
import { useFields } from 'flow-balance/hooks';
import { FormHeader } from './header';
import { FormContact } from './form';

export function View() {

	
	
	  return (
		<main className="page_container-form">
			<div className="card-page">
				<FormHeader />
				{/* <FormContact /> */}			
			</div>
		</main>
	  );
}

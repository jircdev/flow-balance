import * as React from 'react';
import { CreateSignUpContext } from './context';
import { Header } from './header';
import { Redirect } from './redirect';
import { FormSignUp } from './form';
import { Footer } from './footer';

export /*bundle*/
function View() {

	const value = {}
	return (
		<CreateSignUpContext.Provider value={value}>
			<main className='container-page container-page__sign-up'>
				<section className="sign-up-app">
					<Header />
					<Redirect />
					<FormSignUp />
					<Footer />
				</section>
			</main>
		</CreateSignUpContext.Provider>
	)
}

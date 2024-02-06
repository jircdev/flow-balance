import * as React from 'react';
import { CreateLoginContext } from './context';
import { Header } from './header';
import { Redirect } from './redirect';
import { FormLogin } from './form';

export /*bundle*/
function View() {

	const value = {}
	return (
		<CreateLoginContext.Provider value={value}>
			<main className='container-page container-page__login'>
				<section className="login-app">
					<Header />
					<Redirect />
					<FormLogin />
				</section>
			</main>
		</CreateLoginContext.Provider>
	)
}

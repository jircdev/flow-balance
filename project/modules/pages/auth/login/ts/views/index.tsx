import * as React from 'react';
import { CreateLoginContext } from './context';
import { Header } from './header';
import { Redirect } from './redirect';
import { Form } from './form';

export /*bundle*/
function View() {

	const value = {}
	return (
		<CreateLoginContext.Provider value={value}>
			<main className='page_container-login'>
				<section className="login-app">
					<Header />
					<Redirect />
					<Form />
					{/* <Footer /> */}
				</section>
			</main>
		</CreateLoginContext.Provider>
	)
}

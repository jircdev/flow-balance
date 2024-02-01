import * as React from 'react';
import { CreateLoginContext } from './context';
import { Header } from './header';
import { Redirect } from './redirect';
import { FormLogin } from './form';
import { login } from './form-login';
import { WiseForm, WrappedForm } from 'wise-form';

export /*bundle*/
function View() {

	const value = {}
	return (
		<CreateLoginContext.Provider value={value}>
			<main className='page_container-login'>
				<section className="login-app">
					{/* <Header />
					<Redirect />
					<FormLogin /> */}
					{/* <Footer /> */}
					<WiseForm
						settings={login}
					/>;
				</section>
			</main>
		</CreateLoginContext.Provider>
	)
}

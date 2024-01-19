import * as React from 'react';
import { Navigation } from 'flow-balance/body';
import { NavHome } from './nav';
export /*bundle*/
function View(): JSX.Element {
	return (
		<>
		<NavHome />
		<div className='page__container'>
			<h1>
				My first page using BeyondJS with <span className='beyond'>React</span>!
			</h1>
		</div>
		</>
	);
}

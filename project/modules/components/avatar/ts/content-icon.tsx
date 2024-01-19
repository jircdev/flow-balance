import React from 'react';
import { IconButton } from 'pragmate-ui/icons';
import { UseAvatarContext } from './context';

export function ContentIcon() {
	const { handleClick } = UseAvatarContext();

	return (
		<div className='container-avatar__icon'>
			<IconButton className='lg' icon='user' onClick={handleClick} />
		</div>
	);
}

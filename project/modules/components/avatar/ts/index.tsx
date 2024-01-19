import React from 'react';
import { AvatarContext } from './context';
import { ContentIcon } from './content-icon';
import { ContentImage } from './content-image';
import type { Props } from './types';

export /* bundle */ function Avatar(props: Props): JSX.Element {
	const { img, alt, onClickHandler } = props;

	const Control = !img ? ContentIcon : ContentImage;

	const handleClick = () => {
		if (onClickHandler) {
			onClickHandler();
		}
	};

	const value = { img, alt, handleClick };
	return (
		<AvatarContext.Provider value={value}>
			<div className='container-avatar'>
				<Control />
			</div>
		</AvatarContext.Provider>
	);
}

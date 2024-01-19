import React from 'react';
import { Image } from 'pragmate-ui/image';
import { UseAvatarContext } from './context';
export function ContentImage() {
	const { img, alt, handleClick } = UseAvatarContext();

	const relativeRouteIcon = 'assets/user.png';
	const DEFAULT_ALT = alt ? alt : 'image alt';
	const DEFAULT_USER_IMAGE = img ? img : relativeRouteIcon;

	return (
		<div className='container-avatar__image'>
			<Image src={DEFAULT_USER_IMAGE} alt={DEFAULT_ALT} onClick={handleClick} />
		</div>
	);
}

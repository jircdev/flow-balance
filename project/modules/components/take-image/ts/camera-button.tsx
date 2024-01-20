import * as React from 'react';
import {IconButton} from 'pragmate-ui/icons';
import {useTakeImageContext} from './context';
interface IAttrs {
	disabled?: boolean;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export function CameraButton() {
	const isMobile = globalThis.cordova || globalThis.phonegap;
	const {setImage, mediaDevice, onTake, setIsOpen} = useTakeImageContext();

	const onClickMobile = async event => {
		event.preventDefault();
		const blob = await mediaDevice.getPicture();
		setImage(blob);
		if (onTake) await onTake(mediaDevice);
		setIsOpen(false);
	};

	// @todo: add support
	const onClickDesktop = () => false;
	const onClick = isMobile ? onClickMobile : onClickDesktop;
	const attrs: IAttrs = {onClick};
	if (!isMobile) attrs.disabled = true;
	return (
		<div className="option-picture">
			<IconButton onClick={onClick} icon="camera" {...attrs} />
			<span>Tomar una foto</span>
		</div>
	);
}

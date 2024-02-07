import React from 'react';
import { IconButton, Icon } from 'pragmate-ui/icons';
import { Button } from 'pragmate-ui/components';
import { ICONS } from './icons';

export /*bundle*/ function AppIcon({ icon }) {
	icon = ICONS.hasOwnProperty(icon) ? ICONS[icon] : icon;

	return <Icon icon={icon} />;
}

export /*bundle*/ function AppIconButton(props) {
	const attrs = { ...props };
	delete attrs.children;
	if (props.icon) {
		let { icon } = props;
		icon = ICONS.hasOwnProperty(icon) ? ICONS[icon] : icon;
		attrs.icon = icon;
	}

	return <IconButton {...attrs} />;
}

export /*bundle */ function AppButton(props) {
	const attrs = { ...props };
	delete attrs.children;
	if (props.icon) {
		let { icon } = props;
		icon = ICONS.hasOwnProperty(icon) ? ICONS[icon] : icon;
		attrs.icon = icon;
	}

	return <Button {...attrs}>{props.children}</Button>;
}

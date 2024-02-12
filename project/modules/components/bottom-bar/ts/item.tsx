import React from 'react';
import { Icon } from 'pragmate-ui/icons';
import { routing } from '@beyond-js/kernel/routing';
import { useButtonContext } from './context';
import { Link } from 'pragmate-ui/components';
export function ItemIconButton({ data }) {
	const { label, icon, link, iconBox } = data;

	const { handleTabClick } = useButtonContext();

	const handleGoRedirection = () => {
		if (link) {
			routing.pushState(link);
		}
		handleTabClick();
	};

	return (
		<Link
			key={label}
			className={`buttom-nav-item ${routing.uri.pathname === link ? 'active' : ''}`}
			onClick={handleGoRedirection}
		>
			<Icon {...iconBox} className='xs' />
			<span className='buttom-nav-item__span'>{label}</span>
		</Link>
	);
}

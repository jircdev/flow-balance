import React from 'react';
import { IconButton } from 'pragmate-ui/icons';

interface IProps {
	onClick?: Function;
	icon?: string;
}

export function ButtonAdd({ onClick, icon = 'add' }: IProps) {
	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};

	return (
		<div className='container__button-action'>
			<div className='button-action'>
				<IconButton className='md' icon={icon} onClick={handleClick} />
			</div>
		</div>
	);
}

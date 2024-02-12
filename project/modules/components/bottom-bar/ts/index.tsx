import React, { useState } from 'react';
import { CreateButtonContext } from './context';
import { ItemIconButton } from './item';
import { IIcons } from './type';
import { ButtonAdd } from './button';
import { List } from 'pragmate-ui/list';

export /* bundle */ function BottomBar({ icons }: IIcons) {
	const [activeTab, setActiveTab] = useState(false);

	const handleTabClick = () => {
		setActiveTab(true);
	};

	const value = { activeTab, handleTabClick };
	return (
		<CreateButtonContext.Provider value={value}>
			<div className='bottom-nav-container'>
				<ButtonAdd icon='add' />
				<List items={icons} control={ItemIconButton} container='nav' className='bottom-nav-menu' />
			</div>
		</CreateButtonContext.Provider>
	);
}

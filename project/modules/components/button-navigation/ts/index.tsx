import React, { useState } from 'react';
import { CreateButtonContext } from './context';
import { ItemIconButton } from './item';
import { IIcons } from './type';
import { ButtonAdd } from './button';

export /* bundle */ function ButtomNavigator({icons} : IIcons) {
  const [activeTab, setActiveTab] = useState(false);

  const handleTabClick = () => {
    setActiveTab(true);
  };

  const output = icons.map((item) => {
    return <ItemIconButton key={item.label} label={item.label} icon={item.icon} link={item.link} iconBox={item.iconBox} />
  })

  const value = {activeTab, handleTabClick};
  return (
    <CreateButtonContext.Provider value={value}>    
        <div className="buttom-nav-container">
            {output}
            <ButtonAdd icon='add' />
        </div>
    </CreateButtonContext.Provider>
  );
}


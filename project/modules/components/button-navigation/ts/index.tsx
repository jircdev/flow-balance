import React, { useState } from 'react';
import { CreateButtonContext } from './context';
import { ItemIconButton } from './item';

export /* bundle */ function ButtomNavigator({icons}) {
  const [activeTab, setActiveTab] = useState(false);

  const handleTabClick = () => {
    setActiveTab(true);
  };

  const output = icons.map((item) => {
    return <ItemIconButton key={item.label} label={item.label} icon={item.icon} link={item.link} />
  })

  const value = {activeTab, handleTabClick};
  return (
    <CreateButtonContext.Provider value={value}>    
        <div className="buttom-nav-container">
            {output}
        </div>
    </CreateButtonContext.Provider>
  );
}


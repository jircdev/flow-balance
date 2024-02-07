import React from 'react';

export const NavContext = React.createContext({} as any);
export const UseNavContext = () => React.useContext(NavContext);

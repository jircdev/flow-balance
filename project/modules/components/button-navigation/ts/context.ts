import React from 'react';

export const CreateButtonContext = React.createContext({} as any);
export const useButtonContext = () => React.useContext(CreateButtonContext);
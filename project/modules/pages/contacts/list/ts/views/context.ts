import React from 'react';

export const CreateContactContext = React.createContext({} as any);
export const useContactContext = () => React.useContext(CreateContactContext);
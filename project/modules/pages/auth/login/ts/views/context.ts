import React from 'react';

export const CreateLoginContext = React.createContext({} as any);
export const useLoginContext = () => React.useContext(CreateLoginContext);
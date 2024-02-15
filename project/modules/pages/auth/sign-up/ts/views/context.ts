import React from 'react';

export const CreateSignUpContext = React.createContext({} as any);
export const useSignUpContext = () => React.useContext(CreateSignUpContext);
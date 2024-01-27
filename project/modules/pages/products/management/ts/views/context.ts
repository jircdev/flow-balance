import React from 'react';

export const CreateProductsContext = React.createContext({} as any);
export const useProductsContext = () => React.useContext(CreateProductsContext);
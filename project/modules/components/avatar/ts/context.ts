import React from 'react';

export const AvatarContext = React.createContext({} as any);
export const UseAvatarContext = () => React.useContext(AvatarContext);

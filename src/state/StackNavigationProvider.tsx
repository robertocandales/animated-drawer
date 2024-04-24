import React, { createContext, useContext, ReactNode, useState } from 'react';

export const START_FLOW_NAVIGATION = 'StartFlowNavigation';
export const YOUR_CART_FLOW_NAVIGATION = 'YourCartFlowNavigation';
export const FAVORITES_FLOW_NAVIGATION = 'FavoriteFlowNavigation';
export const YOUR_ORDER_FLOW_NAVIGATION = 'YourOrderFlowNavigation';

export interface ScreenType {
  id: number;
  text: string;
  path: string;
}

export const screens: ScreenType[] = [
  { id: 1, text: 'Start', path: START_FLOW_NAVIGATION },
  { id: 2, text: 'Your Cart', path: YOUR_CART_FLOW_NAVIGATION },
  { id: 3, text: 'Favorites', path: FAVORITES_FLOW_NAVIGATION },
  { id: 4, text: 'Your Orders', path: YOUR_ORDER_FLOW_NAVIGATION },
];

type StackNavigationContextType = {
  selectNavigation: ScreenType;
  setSelectNavigation: React.Dispatch<React.SetStateAction<ScreenType>>;
};

const defaultContextValue: StackNavigationContextType = {
  selectNavigation: screens[0],
  setSelectNavigation: () => {},
};

const StackNavigationContext = createContext<StackNavigationContextType>(defaultContextValue);

export const useStackNavigationContext = () => useContext(StackNavigationContext);

interface StackNavigationProviderProps {
  children: ReactNode;
}

export const StackNavigationProvider: React.FC<StackNavigationProviderProps> = ({ children }) => {
  const [selectNavigation, setSelectNavigation] = useState<ScreenType>(screens[0]);

  return (
    <StackNavigationContext.Provider value={{ selectNavigation, setSelectNavigation }}>
      {children}
    </StackNavigationContext.Provider>
  );
};

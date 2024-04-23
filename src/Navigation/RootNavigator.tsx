import { NavigatorScreenParams } from '@react-navigation/native';
import React from 'react';
import StartFlowNavigator, { StartFlowStackParamList } from './StartFlowNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FavoritesFlowStackParamList } from './FavoritesFlowNavigator';
import YourCartFlowNavigator, { YourCartFlowStackParamList } from './YourCartFlowNavigator';
import YourOrderFlowNavigator, { YourOrderFlowStackParamList } from './YourOrderFlowNavigator';

export type RootStackParamList = {
  StartFlow: NavigatorScreenParams<StartFlowStackParamList>;
  FavoritesFlow: NavigatorScreenParams<FavoritesFlowStackParamList>;
  YourCartFlow: NavigatorScreenParams<YourCartFlowStackParamList>;
  YourOrderFlow: NavigatorScreenParams<YourOrderFlowStackParamList>;
};

const Drawer = createDrawerNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,

        drawerType: 'front',
      }}
    >
      <Drawer.Screen name='StartFlow' component={StartFlowNavigator} />
      <Drawer.Screen name='FavoritesFlow' component={StartFlowNavigator} />
      <Drawer.Screen name='YourCartFlow' component={YourCartFlowNavigator} />
      <Drawer.Screen name='YourOrderFlow' component={YourOrderFlowNavigator} />
    </Drawer.Navigator>
  );
};

export default RootNavigator;

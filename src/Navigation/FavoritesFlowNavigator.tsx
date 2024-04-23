import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from './RootNavigator';
import FavoritesScreen from '@/Screens/FavoritesScreen';

export type FavoritesFlowStackParamList = {
  FavoritesScreen: undefined;
};

export type FavoritesFlowScreenProps<Screen extends keyof FavoritesFlowStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<FavoritesFlowStackParamList, Screen>,
    DrawerScreenProps<RootStackParamList>
  >;

const Stack = createNativeStackNavigator<FavoritesFlowStackParamList>();

const FavoritesFlowNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='FavoritesScreen' component={FavoritesScreen} />
    </Stack.Navigator>
  );
};

export default FavoritesFlowNavigator;

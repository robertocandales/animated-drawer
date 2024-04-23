import React from 'react';
import { CompositeScreenProps } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from './RootNavigator';
import YouOrderScreen from '@/Screens/YourOrdersScreen';

export type YourOrderFlowStackParamList = {
  YourOrderScreen: undefined;
};

export type YourOrderFlowScreenProps<Screen extends keyof YourOrderFlowStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<YourOrderFlowStackParamList, Screen>,
    DrawerScreenProps<RootStackParamList>
  >;

const Stack = createNativeStackNavigator<YourOrderFlowStackParamList>();

const YourOrderFlowNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='YouOrderScreen' component={YouOrderScreen} />
    </Stack.Navigator>
  );
};

export default YourOrderFlowNavigator;

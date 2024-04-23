import React from 'react';
import { CompositeScreenProps } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from './RootNavigator';
import YourCartScreen from '@/Screens/YourCartScreen';
export type YourCartFlowStackParamList = {
  YourCartScreen: undefined;
};

export type YourCartFlowScreenProps<Screen extends keyof YourCartFlowStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<YourCartFlowStackParamList, Screen>,
    DrawerScreenProps<RootStackParamList>
  >;

const Stack = createNativeStackNavigator<YourCartFlowStackParamList>();

const YourCartFlowNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='YourCartScreen' component={YourCartScreen} />
    </Stack.Navigator>
  );
};

export default YourCartFlowNavigator;

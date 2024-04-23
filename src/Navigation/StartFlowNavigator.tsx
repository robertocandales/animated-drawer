import StartScreen from '@/Screens/StartScreen';
import React from 'react';
import { CompositeScreenProps } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from './RootNavigator';

export type StartFlowStackParamList = {
  StartScreen: undefined;
};

export type StartFlowScreenProps<Screen extends keyof StartFlowStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<StartFlowStackParamList, Screen>,
    DrawerScreenProps<RootStackParamList>
  >;

const Stack = createNativeStackNavigator<StartFlowStackParamList>();

const StartFlowNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='StartScreen' component={StartScreen} />
    </Stack.Navigator>
  );
};

export default StartFlowNavigator;

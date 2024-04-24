import StartScreen from '@/Screens/StartScreen';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SharedValue } from 'react-native-reanimated';
import { useHeaderOptions } from '@/shared/hooks/useHeaderOptions';
import TabNavigator from './TabNavigator';

interface StartFlowNavigatorProps {
  drawerAnimation: SharedValue<number>;
}

export type StartFlowStackParamList = {
  StartScreen: undefined;
};

const Stack = createNativeStackNavigator<StartFlowStackParamList>();

const StartFlowNavigator: React.FC<StartFlowNavigatorProps> = ({ drawerAnimation }) => {
  const { options } = useHeaderOptions(drawerAnimation);
  return (
    <Stack.Navigator>
      <Stack.Screen options={options} name='StartScreen' component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StartFlowNavigator;

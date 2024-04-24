import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import YouOrderScreen from '@/Screens/YourOrdersScreen';
import { SharedValue } from 'react-native-reanimated';
import { useHeaderOptions } from '@/shared/hooks/useHeaderOptions';

interface YourOrderFlowNavigatorProps {
  drawerAnimation: SharedValue<number>;
}

export type YourOrderFlowStackParamList = {
  YourOrderScreen: undefined;
};

const Stack = createNativeStackNavigator<YourOrderFlowStackParamList>();

const YourOrderFlowNavigator: React.FC<YourOrderFlowNavigatorProps> = ({ drawerAnimation }) => {
  const { options } = useHeaderOptions(drawerAnimation);

  return (
    <Stack.Navigator>
      <Stack.Screen options={options} name='YourOrderScreen' component={YouOrderScreen} />
    </Stack.Navigator>
  );
};

export default YourOrderFlowNavigator;

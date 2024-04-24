import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import YourCartScreen from '@/Screens/YourCartScreen';
import { useHeaderOptions } from '@/shared/hooks/useHeaderOptions';
import { SharedValue } from 'react-native-reanimated';

interface YourCartFlowNavigatorProps {
  drawerAnimation: SharedValue<number>;
}

export type YourCartFlowStackParamList = {
  YourCartScreen: undefined;
};

const Stack = createNativeStackNavigator<YourCartFlowStackParamList>();

const YourCartFlowNavigator: React.FC<YourCartFlowNavigatorProps> = ({ drawerAnimation }) => {
  const { options } = useHeaderOptions(drawerAnimation);

  return (
    <Stack.Navigator>
      <Stack.Screen options={options} name='YourCartScreen' component={YourCartScreen} />
    </Stack.Navigator>
  );
};

export default YourCartFlowNavigator;

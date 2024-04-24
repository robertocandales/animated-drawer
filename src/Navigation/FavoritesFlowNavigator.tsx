import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import FavoritesScreen from '@/Screens/FavoritesScreen';
import { SharedValue } from 'react-native-reanimated';
import { useHeaderOptions } from '@/shared/hooks/useHeaderOptions';

interface FavoritesFlowNavigatorProps {
  drawerAnimation: SharedValue<number>;
}

export type FavoritesFlowStackParamList = {
  FavoritesScreen: undefined;
};

const Stack = createNativeStackNavigator<FavoritesFlowStackParamList>();

const FavoritesFlowNavigator: React.FC<FavoritesFlowNavigatorProps> = ({ drawerAnimation }) => {
  const { options } = useHeaderOptions(drawerAnimation);

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen options={options} name='FavoritesScreen' component={FavoritesScreen} />
      </Stack.Navigator>
    </>
  );
};

export default FavoritesFlowNavigator;

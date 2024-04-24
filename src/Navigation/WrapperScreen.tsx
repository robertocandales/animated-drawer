import Animated, { SharedValue } from 'react-native-reanimated';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import StartFlowNavigator from './StartFlowNavigator';
import {
  FAVORITES_FLOW_NAVIGATION,
  START_FLOW_NAVIGATION,
  YOUR_CART_FLOW_NAVIGATION,
  YOUR_ORDER_FLOW_NAVIGATION,
  useStackNavigationContext,
} from '@/state/StackNavigationProvider';
import YourCartFlowNavigator from './YourCartFlowNavigator';
import YourOrderFlowNavigator from './YourOrderFlowNavigator';
import FavoritesFlowNavigator from './FavoritesFlowNavigator';

type ScreenPropsType = {
  drawerAnimation: SharedValue<number>;
  style: {
    transform: (
      | {
          rotateZ: string;
          translateX?: undefined;
          translateY?: undefined;
        }
      | {
          translateX: number;
          rotateZ?: undefined;
          translateY?: undefined;
        }
      | {
          translateY: number;
          rotateZ?: undefined;
          translateX?: undefined;
        }
    )[];
    borderRadius: number;
  };
};

export default function WrapperScreen({ drawerAnimation, style }: ScreenPropsType) {
  const { selectNavigation } = useStackNavigationContext();
  return (
    <Animated.View style={[styles.container, style]}>
      <View style={styles.wrapperScreen}>
        {selectNavigation.path === START_FLOW_NAVIGATION ? (
          <StartFlowNavigator drawerAnimation={drawerAnimation} />
        ) : selectNavigation.path === YOUR_CART_FLOW_NAVIGATION ? (
          <YourCartFlowNavigator drawerAnimation={drawerAnimation} />
        ) : selectNavigation.path === YOUR_ORDER_FLOW_NAVIGATION ? (
          <YourOrderFlowNavigator drawerAnimation={drawerAnimation} />
        ) : selectNavigation.path === FAVORITES_FLOW_NAVIGATION ? (
          <FavoritesFlowNavigator drawerAnimation={drawerAnimation} />
        ) : (
          <Text>Other</Text>
        )}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  wrapperScreen: {
    flex: 1,
    padding: 15,
  },
});

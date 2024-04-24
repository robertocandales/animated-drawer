import React, { useCallback } from 'react';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  State,
} from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
  Easing,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import { ScreenType, useStackNavigationContext } from '@/state/StackNavigationProvider';
import WrapperScreen from '@/Navigation/WrapperScreen';
import DrawerNavigation from '@/Navigation/DrawerNavigation';

const { width } = Dimensions.get('window');
const config = {
  duration: 500,
  easing: Easing.bezier(0.5, 0.01, 0, 1),
};

const RootNavigation = () => {
  const { setSelectNavigation, selectNavigation } = useStackNavigationContext();
  //the logic could be done in a custom hook
  const drawerAnimation = useSharedValue(0);

  const onGestureEvent = useCallback(({ nativeEvent }: PanGestureHandlerGestureEvent) => {
    const { translationX } = nativeEvent;
    drawerAnimation.value = Math.min(Math.max(translationX / (width / 1.6), 0), 1);
  }, []);

  const onHandlerStateChange = useCallback(({ nativeEvent }: PanGestureHandlerGestureEvent) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationX < width / 3) {
        drawerAnimation.value = withTiming(0, config);
      } else {
        drawerAnimation.value = withTiming(1, config);
      }
    }
  }, []);

  const transition = useDerivedValue(() => withTiming(drawerAnimation.value, config));

  const screenAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotateZ: `${interpolate(transition.value, [0, 1], [0, -8])}deg` },
        { translateX: interpolate(transition.value, [0, 1], [0, width / 1.6]) },
        { translateY: interpolate(transition.value, [0, 1], [0, 100]) },
      ],
      borderRadius: interpolate(transition.value, [0, 1], [0, 40]),
    };
  });

  const drawerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: interpolate(transition.value, [0, 1], [0, 50]) }],
      borderTopLeftRadius: interpolate(transition.value, [0, 1], [0, 40]),
    };
  });

  const onPressHandler = useCallback(
    (value: ScreenType) => {
      drawerAnimation.value = 0;
      setSelectNavigation(value);
    },
    [drawerAnimation.value]
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <View style={styles.mainContainer}>
            {/*drawer*/}
            <DrawerNavigation
              style={drawerAnimatedStyle}
              onPress={onPressHandler}
              selectNavigation={selectNavigation}
            />
            {/*screen*/}
            <WrapperScreen drawerAnimation={drawerAnimation} style={screenAnimatedStyle} />
          </View>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

import { StyleSheet, Platform, useWindowDimensions } from 'react-native';
import React, { useEffect } from 'react';
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer';

const ScreenWrapper = ({ children }: any) => {
  const progress = useDrawerProgress();

  const { width } = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      {
        scale: interpolate(progress.value, [0, 1], [1, 0.8], 'clamp'),
      },
      {
        rotate: `${interpolate(progress?.value, [0, 1], [0, -7], 'clamp')}deg`,
      },
      {
        translateX: interpolate(
          progress.value,
          [0, 1],
          [0, Platform.OS === 'android' ? width - 130 : -60],
          'clamp'
        ),
      },
      {
        translateY: interpolate(
          progress.value,
          [0, 1],
          [0, Platform.OS === 'android' ? width + 130 : +60],
          'clamp'
        ),
      },
    ],
    borderRadius: interpolate(progress?.value, [0, 1], [0, 16], 'clamp'),
    overflow: 'hidden',
  }));

  return <Animated.View style={[styles.container, animatedStyle]}>{children}</Animated.View>;
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    zIndex: 1000,
    width: '100%',
    height: '100%',
    //backgroundColor: '$fff',
    //zIndex: 100,
    //position: 'relative',
  },
});

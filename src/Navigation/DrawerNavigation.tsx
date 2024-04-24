import { colors } from '@/config/color';
import DrawerItem from '@/shared/components/DrawerItem';
import { ScreenType, screens } from '@/state/StackNavigationProvider';
import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';

type DrawerNavigationPropsType = {
  onPress: (value: ScreenType) => void;
  style: {
    transform: {
      translateY: number;
    }[];
    borderTopLeftRadius: number;
  };
  selectNavigation: ScreenType;
};

export default function DrawerNavigation({
  style,
  onPress,
  selectNavigation,
}: DrawerNavigationPropsType) {
  return (
    <Animated.View style={[styles.mainContainer, style]}>
      <Text style={styles.title}>Roberto</Text>
      {screens.map(({ id, text, path }) => (
        <DrawerItem
          key={id}
          active={path === selectNavigation.path}
          onPress={() => onPress({ id, text, path })}
          text={text}
        />
      ))}
      <View style={styles.divider} />
      <DrawerItem active={false} onPress={() => {}} text={'Sign Out'} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: colors.bg,
    paddingRight: '50%',
    paddingTop: '25%',
    paddingLeft: 24,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '900',
    lineHeight: 35,
    textAlign: 'center',
    marginBottom: '30%',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.text,
    marginTop: '30%',
    marginBottom: '30%',
  },
});

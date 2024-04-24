import MenuIcon from '@/shared/icons/MenuIcon';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HeaderProps {
  drawerAnimation: any;
  selectNavigation: any;
}

const Header: React.FC<HeaderProps> = ({ drawerAnimation, selectNavigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          drawerAnimation.value = +!drawerAnimation.value;
        }}
      >
        <MenuIcon />
      </TouchableOpacity>
      <Text style={styles.text}>{selectNavigation.text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingLeft: 20,
    fontSize: 30,
    lineHeight: 30,
    textTransform: 'uppercase',
  },
});

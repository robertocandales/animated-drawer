import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text>Start screen content</Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    padding: 16,
  },
});

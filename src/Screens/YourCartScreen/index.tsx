import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const YourCartScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <Text>Your Cart screen content</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default YourCartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    padding: 16,
  },
});

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const StartScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <Text>Start screen content</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    padding: 16,
  },
});

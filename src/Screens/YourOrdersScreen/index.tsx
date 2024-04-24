import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const YouOrderScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <Text>Your order screen order</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default YouOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    padding: 16,
  },
});

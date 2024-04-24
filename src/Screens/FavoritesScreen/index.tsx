import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const FavoritesScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <Text>Favorite screen content</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    padding: 16,
  },
});

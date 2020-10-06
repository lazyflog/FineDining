import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {colors} from '../styles'

export default function index() {
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <StatusBar style="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

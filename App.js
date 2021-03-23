import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
  Text,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.mainPanel}>
        <View style={styles.interface}></View>
        <View style={styles.interfacePart}></View>
        <View style={styles.interfacePart1}></View>
        <View style={styles.interfacePart2}></View>
      </View>
      <View style={styles.foldClip}></View>
      <View style={styles.foldClip1}></View>
      <View style={styles.foldClip2}></View>
      <View style={styles.foldClip3}></View>
      <View style={styles.foldClip4}></View>
      <View style={styles.foldClip5}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  mainPanel: {
    backgroundColor: '#9b0000',
    flex: 1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  foldClip: {
    position: 'absolute',
    height: '10%',
    width: '10%',
    right: 0,
    borderWidth: 1,
    backgroundColor: '#9a0007',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  foldClip1: {
    position: 'absolute',
    height: '10%',
    width: '10%',
    right: 0,
    borderWidth: 1,
    top: '10%',
    backgroundColor: '#ba000d',
  },
  foldClip2: {
    position: 'absolute',
    height: '10%',
    width: '10%',
    right: 0,
    top: '20%',
    borderWidth: 1,
    backgroundColor: '#9a0007',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  foldClip3: {
    position: 'absolute',
    height: '50%',
    width: '10%',
    right: 0,
    top: '30%',
    borderWidth: 1,
    backgroundColor: '#ba000d',
  },
  foldClip4: {
    position: 'absolute',
    height: '10%',
    width: '10%',
    right: 0,
    top: '80%',
    borderWidth: 1,
    backgroundColor: '#9a0007',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  foldClip5: {
    position: 'absolute',
    height: '10%',
    width: '10%',
    right: 0,
    top: '90%',
    borderWidth: 1,
    backgroundColor: '#ba000d',
  },
  interface: {
    height: '80%',
    width: '100%',
    position: 'absolute',
    top: '20%',
    borderBottomLeftRadius: 50,
    zIndex: 2,
    backgroundColor: '#d50000',
  },
  interfacePart: {
    height: '10%',
    width: '50%',
    position: 'absolute',
    top: '10%',
    right: 0,
    zIndex: 2,
    backgroundColor: '#d50000',
    borderTopLeftRadius: 100,
  },
  interfacePart1: {
    height: '15%',
    width: '30%',
    position: 'absolute',
    top: '5%',
    right: '47%',
    zIndex: 2,
    backgroundColor: '#9b0000',
    borderRadius: 150,
  },
  interfacePart2: {
    height: '20%',
    width: '12%',
    position: 'absolute',
    top: '15%',
    right: '47%',
    zIndex: 1,
    backgroundColor: '#d50000',
    borderRadius: 150,
  },
});

export default App;

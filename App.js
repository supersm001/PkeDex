import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Screen1 from './assets/components/screen1';
import Screen2 from './assets/components/screen2';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const metric = height / 100;
const Tab = createMaterialTopTabNavigator();
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarVisible: false,
          }}>
          <Tab.Screen name="Screen1" component={Screen1} headerMode="none" />
          <Tab.Screen name="Screen2" component={Screen2} headerMode="none" />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: height + 50,
    width: width,
    bottom: 48.2,
  },
});

export default App;

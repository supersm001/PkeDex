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
import Screen1 from './assets/components/screen1';
import Screen2 from './assets/components/screen2';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const metric = height / 100;
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Screen1"
            component={Screen1}
            options={{
              tabBarVisible: false,
              gesturesEnabled: true,
            }}
          />
          <Tab.Screen
            name="Screen2"
            component={Screen2}
            options={{
              tabBarVisible: false,
              gesturesEnabled: true,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: height,
    width: width,
  },
});

export default App;

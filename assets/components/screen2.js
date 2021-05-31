import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const metric = height / 100;
const Screen2 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.mainPanel}>
        <View style={styles.interface}>
          <View style={styles.dataFrame}></View>
        </View>
        <View style={styles.interfacePart}></View>
        <View style={styles.interfacePart1}></View>
        <View style={styles.interfacePart2}></View>
      </View>
      <View style={styles.foldClip}></View>
      <View style={styles.foldClip1}></View>
      <View style={styles.foldClip2}></View>
      <View style={styles.foldClip3}>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}
          onPress={() => {
            navigation.navigate('Screen1');
          }}>
          <FontAwesome5Icon name="arrow-circle-left" size={40} color="green" />
        </TouchableOpacity>
      </View>
      <View style={styles.foldClip4}></View>
      <View style={styles.foldClip5}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: height,
    width: width,
  },
  mainPanel: {
    backgroundColor: 'black',
    height: height,
    width: width,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  foldClip: {
    position: 'absolute',
    height: '10%',
    width: '10%',
    left: 0,
    borderWidth: 1,
    backgroundColor: '#9a0007',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  foldClip1: {
    position: 'absolute',
    height: '10%',
    width: '10%',
    left: 0,
    borderWidth: 1,
    top: '10%',
    backgroundColor: '#ba000d',
  },
  foldClip2: {
    position: 'absolute',
    height: '10%',
    width: '10%',
    left: 0,
    top: '20%',
    borderWidth: 1,
    backgroundColor: '#9a0007',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  foldClip3: {
    position: 'absolute',
    height: '50%',
    width: '10%',
    left: 0,
    top: '30%',
    borderWidth: 1,
    backgroundColor: '#ba000d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foldClip4: {
    position: 'absolute',
    height: '10%',
    width: '10%',
    left: 0,
    top: '80%',
    borderWidth: 1,
    backgroundColor: '#9a0007',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  foldClip5: {
    position: 'absolute',
    height: '10%',
    width: '10%',
    left: 0,
    top: '90%',
    borderWidth: 1,
    backgroundColor: '#ba000d',
  },
  interface: {
    height: '80%',
    width: '100%',
    position: 'absolute',
    top: '20%',
    borderBottomRightRadius: 50,
    zIndex: 2,
    backgroundColor: '#d50000',
  },
  interfacePart: {
    height: '10%',
    width: '50%',
    position: 'absolute',
    top: '10%',
    left: 0,
    zIndex: 2,
    backgroundColor: '#d50000',
    borderTopRightRadius: 100,
  },
  interfacePart1: {
    height: '15%',
    width: '30%',
    position: 'absolute',
    top: '5%',
    left: '47%',
    zIndex: 2,
    backgroundColor: 'black',
    borderRadius: 150,
  },
  interfacePart2: {
    height: '20%',
    width: '12%',
    position: 'absolute',
    top: '15%',
    left: '47%',
    zIndex: 1,
    backgroundColor: '#d50000',
    borderRadius: 150,
  },
  dataFrame: {
    height: '60%',
    width: '90%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screen2;

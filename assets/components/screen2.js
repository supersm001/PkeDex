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
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
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
          <View style={styles.dataFrame}>
            <View style={styles.displayInfo}></View>
            <View style={styles.displayInfo2}>
              <View
                style={{height: '50%', width: '99.9%', flexDirection: 'row'}}>
                <View style={styles.minDisplay}></View>
                <View style={styles.minDisplay}></View>
                <View style={styles.minDisplay}></View>
                <View style={styles.minDisplay}></View>
                <View style={styles.minDisplay}></View>
              </View>
              <View
                style={{height: '50%', width: '99.9%', flexDirection: 'row'}}>
                <View style={styles.minDisplay}></View>
                <View style={styles.minDisplay}></View>
                <View style={styles.minDisplay}></View>
                <View style={styles.minDisplay}></View>
                <View style={styles.minDisplay}></View>
              </View>
            </View>
          </View>
          <View style={styles.controlFrame}>
            <TouchableOpacity style={styles.lilButton1}></TouchableOpacity>
            <TouchableOpacity style={styles.lilButton2}></TouchableOpacity>
            <TouchableOpacity style={styles.playButton}>
              <EntypoIcon
                name="triangle-left"
                size={50}
                color="#7f0000"
                style={{left: -4}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.capsulebutton1}></TouchableOpacity>
            <TouchableOpacity style={styles.capsulebutton2}></TouchableOpacity>
            <TouchableOpacity style={styles.arrowButtonLeft}>
              <AntDesignIcon name="caretleft" size={30} color="#7f0000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowButtonRight}>
              <AntDesignIcon name="caretright" size={30} color="#7f0000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bigButton}></TouchableOpacity>
            <TouchableOpacity style={styles.bigButton2}></TouchableOpacity>
          </View>
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
    top: '10.006%',
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
    height: '70%',
    width: '90%',
    left: '10%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  displayInfo: {
    height: '45%',
    width: '85%',
    backgroundColor: '#64dd17',
    borderRadius: 15,
    borderWidth: 1,
    elevation: 50,
  },
  displayInfo2: {
    height: '30%',
    width: '85%',
    // backgroundColor: 'purple',
  },
  minDisplay: {
    height: '99%',
    width: '20%',
    backgroundColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    elevation: 10,
  },
  controlFrame: {
    height: '30%',
    width: '90%',
    left: '10%',
    backgroundColor: 'transparent',
    borderBottomRightRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lilButton1: {
    height: metric * 2.5,
    width: metric * 2.5,
    position: 'absolute',
    top: '0%',
    left: '10%',
    backgroundColor: '#1b5e20',
    borderWidth: 2,
    borderRadius: 100,
    elevation: 10,
  },
  lilButton2: {
    height: metric * 2.5,
    width: metric * 2.5,
    position: 'absolute',
    top: '0%',
    left: '20%',
    backgroundColor: 'yellow',
    borderWidth: 2,
    borderRadius: 100,
    elevation: 10,
  },
  capsulebutton1: {
    height: metric * 3,
    width: metric * 11,
    borderRadius: 10,
    position: 'absolute',
    top: '0%',
    left: '40%',
    borderWidth: 1,
    backgroundColor: 'green',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  capsulebutton2: {
    height: metric * 3,
    width: metric * 11,
    borderRadius: 10,
    borderWidth: 1,
    position: 'absolute',
    top: '0%',
    left: '70%',
    backgroundColor: 'orange',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  arrowButtonLeft: {
    height: metric * 7,
    width: metric * 8,
    backgroundColor: '#a1887f',
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 10,
    position: 'absolute',
    top: '20%',
    left: '8%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowButtonRight: {
    height: metric * 7,
    width: metric * 8,
    backgroundColor: '#a1887f',
    borderWidth: 2,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 10,
    position: 'absolute',
    top: '20%',
    left: metric * 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    height: metric * 7,
    width: metric * 7,
    position: 'absolute',
    top: '20%',
    left: '75%',
    backgroundColor: '#ffc400',
    borderWidth: 2,
    borderRadius: 100,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigButton: {
    height: metric * 7,
    width: metric * 18,
    borderRadius: 15,
    position: 'absolute',
    top: '60%',
    left: '13%',
    // borderWidth: 1,
    backgroundColor: '#ffc400',
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.9,
    // shadowRadius: 3,
    elevation: 20,
  },
  bigButton2: {
    height: metric * 7,
    width: metric * 18,
    borderRadius: 15,
    position: 'absolute',
    top: '60%',
    left: '50%',
    // borderWidth: 1,
    backgroundColor: '#ffc400',
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.9,
    // shadowRadius: 3,
    elevation: 10,
  },
});

export default Screen2;

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
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const metric = height / 100;
const Screen1 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.mainPanel}>
        <View style={styles.bigButton}>
          <View style={styles.bigButtonPart}></View>
        </View>
        <View style={styles.lilButton1}></View>
        <View style={styles.lilButton2}></View>
        <View style={styles.lilButton3}></View>
        <View style={styles.interface}>
          <View style={styles.dataFrame}>
            <View style={styles.display}>
              <View style={styles.displayPart}></View>
              <View style={styles.dot1}></View>
              <View style={styles.dot2}></View>
              <View style={styles.redButton}></View>
              <View style={styles.speakerGrill1}></View>
              <View style={styles.speakerGrill2}></View>
              <View style={styles.speakerGrill3}></View>
              <View style={styles.speakerGrill4}></View>
              <View style={styles.speakerGrill5}></View>
              <View style={styles.speakerGrill6}></View>
              <View style={styles.OutputScreen}>
                <Image
                  source={require('../images/pikachu.png')}
                  style={styles.OutputScreenImage}
                />
              </View>
            </View>
          </View>
          <View style={styles.controlFrame}>
            <View style={styles.blueButton}></View>
            <View style={styles.capsulebutton1}></View>
            <View style={styles.capsulebutton2}></View>
            <View style={styles.rankBoard}>
              <View style={styles.innerRankBoard}>
                <Text style={styles.rankText}>26</Text>
              </View>
            </View>
            <View style={styles.joystick}>
              <View style={styles.joysticPart1}>
                <AntDesignIcon name="caretup" size={30} color="gray" />
              </View>
              <View style={styles.joysticPart2}>
                <AntDesignIcon name="caretleft" size={30} color="gray" />
              </View>
              <View style={styles.joysticPart3}>
                <AntDesignIcon name="caretright" size={30} color="gray" />
              </View>
              <View style={styles.joysticPart4}>
                <AntDesignIcon name="caretdown" size={30} color="gray" />
              </View>
              <View style={styles.joysticPart5}></View>
            </View>
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
            navigation.navigate('Screen2');
          }}>
          <FontAwesome5Icon name="arrow-circle-right" size={40} color="green" />
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
    backgroundColor: '#9b0000',
    height: height,
    width: width,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  bigButton: {
    height: metric * 15,
    width: metric * 15,
    position: 'absolute',
    top: '2%',
    left: '7%',
    backgroundColor: 'white',
    borderRadius: 100,
    elevation: 10,
  },
  bigButtonPart: {
    flex: 1,
    margin: '10%',
    borderWidth: 0.1,
    backgroundColor: 'lightblue',
    borderRadius: 100,
    elevation: 30,
  },
  lilButton1: {
    height: metric * 3,
    width: metric * 3,
    position: 'absolute',
    top: '2%',
    left: '40%',
    backgroundColor: 'red',
    borderRadius: 100,
    elevation: 10,
  },
  lilButton2: {
    height: metric * 3,
    width: metric * 3,
    position: 'absolute',
    top: '2%',
    left: '48%',
    backgroundColor: 'yellow',
    borderRadius: 100,
    elevation: 10,
  },
  lilButton3: {
    height: metric * 3,
    width: metric * 3,
    position: 'absolute',
    top: '2%',
    left: '56%',
    backgroundColor: 'lightgreen',
    borderRadius: 100,
    elevation: 10,
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
    alignItems: 'center',
    justifyContent: 'center',
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

  dataFrame: {
    height: '60%',
    width: '90%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlFrame: {
    height: '40%',
    width: '90%',
    backgroundColor: 'transparent',
    borderBottomLeftRadius: 50,
  },
  blueButton: {
    height: metric * 10,
    width: metric * 10,
    position: 'absolute',
    top: '0%',
    left: '7%',
    backgroundColor: '#0d47a1',
    borderRadius: 100,
    elevation: 10,
  },
  capsulebutton1: {
    height: metric * 3,
    width: metric * 11,
    borderRadius: 10,
    position: 'absolute',
    top: '10%',
    left: '30%',
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
    position: 'absolute',
    top: '10%',
    left: '55%',
    backgroundColor: 'orange',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  rankBoard: {
    height: metric * 12,
    width: metric * 22,
    borderRadius: 20,
    position: 'absolute',
    top: '40%',
    left: '8%',
    borderWidth: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#126e82',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 10,
  },
  innerRankBoard: {
    height: '70%',
    width: '70%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 1,
  },
  rankText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  joystick: {
    height: metric * 18,
    width: metric * 18,
    borderRadius: 0,
    position: 'absolute',
    top: '30%',
    right: '8%',
    backgroundColor: '#d50000',
  },
  joysticPart1: {
    height: '33%',
    width: '33%',
    backgroundColor: '#252525',
    position: 'absolute',
    top: '0%',
    left: '33%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  joysticPart2: {
    height: '33%',
    width: '33%',
    backgroundColor: '#252525',
    position: 'absolute',
    top: '33%',
    left: '0%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  joysticPart3: {
    height: '33%',
    width: '33%',
    backgroundColor: '#252525',
    position: 'absolute',
    top: '33%',
    left: '66%',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  joysticPart4: {
    height: '33%',
    width: '33%',
    backgroundColor: '#252525',
    position: 'absolute',
    top: '66%',
    left: '33%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  joysticPart5: {
    height: '33%',
    width: '33%',
    backgroundColor: '#252525',
    position: 'absolute',
    top: '33%',
    left: '33%',
  },

  display: {
    height: '60%',
    width: '80%',
    backgroundColor: '#9e9e9e',
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayPart: {
    position: 'absolute',
    height: '50%',
    width: '50%',
    backgroundColor: '#d50000',
    transform: [{rotateX: '50deg'}, {rotateZ: '50deg'}],
    left: '-25%',
    top: '70%',
  },

  OutputScreen: {
    height: '60%',
    width: '85%',
    backgroundColor: 'white',
    top: '-8%',
    borderWidth: 2,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  OutputScreenImage: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
    resizeMode: 'stretch',
  },
  dot1: {
    height: metric * 1.5,
    width: metric * 1.5,
    position: 'absolute',
    top: '3%',
    left: '45%',
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 100,
  },
  dot2: {
    height: metric * 1.5,
    width: metric * 1.5,
    position: 'absolute',
    top: '3%',
    left: '55%',
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 100,
  },
  redButton: {
    height: metric * 5,
    width: metric * 5,
    position: 'absolute',
    top: '80%',
    left: '30%',
    backgroundColor: 'red',
    borderWidth: 0.5,
    borderRadius: 100,
    elevation: 5,
  },
  speakerGrill1: {
    height: '2%',
    width: '12%',
    position: 'absolute',
    top: '85%',
    left: '65%',
    backgroundColor: '#616161',
    borderWidth: 1,
  },
  speakerGrill2: {
    height: '2%',
    width: '12%',
    position: 'absolute',
    top: '89%',
    left: '65%',
    backgroundColor: '#616161',
    borderWidth: 1,
  },
  speakerGrill3: {
    height: '2%',
    width: '12%',
    position: 'absolute',
    top: '93%',
    left: '65%',
    backgroundColor: '#616161',
    borderWidth: 1,
  },
  speakerGrill4: {
    height: '2%',
    width: '12%',
    position: 'absolute',
    top: '85%',
    left: '79%',
    backgroundColor: '#616161',
    borderWidth: 1,
  },
  speakerGrill5: {
    height: '2%',
    width: '12%',
    position: 'absolute',
    top: '89%',
    left: '79%',
    backgroundColor: '#616161',
    borderWidth: 1,
  },
  speakerGrill6: {
    height: '2%',
    width: '12%',
    position: 'absolute',
    top: '93%',
    left: '79%',
    backgroundColor: '#616161',
    borderWidth: 1,
  },
});

export default Screen1;

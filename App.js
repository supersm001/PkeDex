import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Image } from 'react-native';

const App = () => {
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
              <View style={styles.displayPart1}></View>
              <View style={styles.displayPart2}></View>
              <View style={styles.displayPart3}></View>
              <View style={styles.displayPart4}></View>
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
                  source={require('./assets/images/pikachu.png')}
                  style={styles.OutputScreenImage}
                />
              </View>
            </View>
          </View>
          <View style={styles.controlFrame}>
            <View style={styles.blueButton}></View>
          </View>
        </View>
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
  bigButton: {
    height: '15%',
    width: '27%',
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
    height: '3%',
    width: '5.5 %',
    position: 'absolute',
    top: '2%',
    left: '40%',
    backgroundColor: 'red',
    borderRadius: 100,
    elevation: 10,
  },
  lilButton2: {
    height: '3%',
    width: '5.5 %',
    position: 'absolute',
    top: '2%',
    left: '48%',
    backgroundColor: 'yellow',
    borderRadius: 100,
    elevation: 10,
  },
  lilButton3: {
    height: '3%',
    width: '5.5 %',
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
    //alignItems: 'center',
    //justifyContent: 'center'
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
    height: '30%',
    width: '19%',
    position: 'absolute',
    top: '0%',
    left: '7%',
    backgroundColor: '#0d47a1',
    borderRadius: 100,
    elevation: 10,
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
    transform: [{ rotateX: '50deg' }, { rotateZ: '50deg' }],
    left: '-25%',
    top: '70%',
  },
  displayPart1: {
    position: 'absolute',
    height: '5%',
    width: '5%',
    backgroundColor: '#d50000',
    top: '69%',
    left: '-4%',
  },
  displayPart2: {
    position: 'absolute',
    height: '4%',
    width: '4%',
    backgroundColor: '#d50000',
    top: '96%',
    left: '27%',
  },
  displayPart3: {
    position: 'absolute',
    height: '8%',
    width: '8%',
    backgroundColor: '#9e9e9e',
    top: '65%',
    left: '0%',
    borderRadius: 50,
  },
  displayPart4: {
    position: 'absolute',
    height: '8%',
    width: '8%',
    backgroundColor: '#9e9e9e',
    top: '92%',
    left: '26%',
    borderRadius: 100,
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
    flex: 1,
    borderRadius: 15,
    resizeMode: 'stretch',
  },
  dot1: {
    height: '5%',
    width: '4%',
    position: 'absolute',
    top: '3%',
    left: '45%',
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 100,
  },
  dot2: {
    height: '5%',
    width: '4%',
    position: 'absolute',
    top: '3%',
    left: '55%',
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 100,
  },
  redButton: {
    height: '14%',
    width: '10%',
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

export default App;

import React from 'react';
import {View, StyleSheet} from 'react-native';

function HomeworkScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.boxRed}></View>
      <View style={styles.boxOrange}></View>
      <View style={styles.boxBlue}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aqua',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  boxRed: {
    bottom: 50,
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  boxOrange: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
  },
  boxBlue: {
    bottom: 50,
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});

export default HomeworkScreen;

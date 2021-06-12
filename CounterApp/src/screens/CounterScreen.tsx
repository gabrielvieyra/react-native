import React, {useState} from 'react';
import {Button, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import Fab from '../components/Fab';

function CounterScreen() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 21}}>Contador: {counter}</Text>

      <Fab title="+1" onPress={() => setCounter(counter + 1)} />
      <Fab title="-1" onPress={() => setCounter(counter - 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CounterScreen;

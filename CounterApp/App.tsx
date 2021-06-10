import React from 'react';
import {Text, View} from 'react-native';

function App() {
  return (
    <View
      style={{
        backgroundColor: 'aqua',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black', fontSize: 24}}>Hola Mundo</Text>
    </View>
  );
}

export default App;

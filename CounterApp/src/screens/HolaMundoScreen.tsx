import React from 'react';
import {Text, View} from 'react-native';

function HolaMundoScreen(props) {
  const {title} = props;

  return (
    <View
      style={{
        backgroundColor: 'aqua',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black', fontSize: 24}}>{title}</Text>
    </View>
  );
}

export default HolaMundoScreen;

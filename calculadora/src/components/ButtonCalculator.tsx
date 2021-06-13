import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {styles} from '../theme/AppTheme';

interface Props {
  text: string;
  colour?: string;
  ancho?: boolean;
  handleCallback: (numberText: string) => void;
}

function ButtonCalculator(props: Props) {
  const {text, colour = '#2D2D2D', ancho = false, handleCallback} = props;
  // en este caso si no me mandan el ancho por defecto el valor de widht va a ser false

  return (
    <TouchableOpacity onPress={() => handleCallback(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: colour,
          width: ancho ? 160 : 70,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: colour === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ButtonCalculator;

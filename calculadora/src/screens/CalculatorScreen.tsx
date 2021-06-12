import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonCalculator from '../components/ButtonCalculator';
import {styles} from '../theme/AppTheme';

function CalculatorScreen() {
  return (
    <View style={styles.containerCalculator}>
      <Text style={styles.textResultSmall}>1.500,00</Text>
      <Text style={styles.textResult}>1.500,00</Text>

      <View style={styles.row}>
        <ButtonCalculator text="C" colour="#9B9B9B" />
        <ButtonCalculator text="+/-" colour="#9B9B9B" />
        <ButtonCalculator text="del" colour="#9B9B9B" />
        <ButtonCalculator text="/" colour="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="7" />
        <ButtonCalculator text="8" />
        <ButtonCalculator text="9" />
        <ButtonCalculator text="x" colour="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="4" />
        <ButtonCalculator text="5" />
        <ButtonCalculator text="6" />
        <ButtonCalculator text="-" colour="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="1" />
        <ButtonCalculator text="2" />
        <ButtonCalculator text="3" />
        <ButtonCalculator text="+" colour="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="0" ancho={true} />
        <ButtonCalculator text="." />
        <ButtonCalculator text="=" colour="#FF9427" />
      </View>
    </View>
  );
}

export default CalculatorScreen;

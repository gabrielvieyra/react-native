import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonCalculator from '../components/ButtonCalculator';
import {styles} from '../theme/AppTheme';

function CalculatorScreen() {
  const [result, setResult] = useState('0');
  const [number, setNumber] = useState('0');

  function buildNumber(numberText: string) {
    // No aceptar doble punto
    if (number.includes('.') && numberText === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (numberText === '.') {
        setNumber(number + numberText);

        // Evaluar si es otro cero y hay un punto
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);

        // Evaluar si es diferente de cero y no tiene un punto
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);

        // Evitar 0000.0
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  }

  function positiveNegative() {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  }

  return (
    <View style={styles.containerCalculator}>
      <Text style={styles.textResultSmall}>{result}</Text>
      <Text style={styles.textResult} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalculator
          text="C"
          colour="#9B9B9B"
          handleCallback={() => setNumber('0')}
        />
        <ButtonCalculator
          text="+/-"
          colour="#9B9B9B"
          handleCallback={positiveNegative}
        />
        <ButtonCalculator text="del" colour="#9B9B9B" />
        <ButtonCalculator text="/" colour="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="7" handleCallback={buildNumber} />
        <ButtonCalculator text="8" handleCallback={buildNumber} />
        <ButtonCalculator text="9" handleCallback={buildNumber} />
        <ButtonCalculator text="x" colour="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="4" handleCallback={buildNumber} />
        <ButtonCalculator text="5" handleCallback={buildNumber} />
        <ButtonCalculator text="6" handleCallback={buildNumber} />
        <ButtonCalculator text="-" colour="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="1" handleCallback={buildNumber} />
        <ButtonCalculator text="2" handleCallback={buildNumber} />
        <ButtonCalculator text="3" handleCallback={buildNumber} />
        <ButtonCalculator text="+" colour="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="0" ancho={true} handleCallback={buildNumber} />
        <ButtonCalculator text="." handleCallback={buildNumber} />
        <ButtonCalculator text="=" colour="#FF9427" />
      </View>
    </View>
  );
}

export default CalculatorScreen;

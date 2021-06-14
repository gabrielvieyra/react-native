import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonCalculator from '../components/ButtonCalculator';
import {useCalculator} from '../hooks/useCalculator';
import {styles} from '../theme/AppTheme';

function CalculatorScreen() {
  const [
    result,
    number,
    clear,
    positiveNegative,
    deleteNumber,
    btnDivide,
    btnMultiply,
    buildNumber,
    btnRest,
    btnSum,
    calculate,
  ] = useCalculator();

  return (
    <View style={styles.containerCalculator}>
      {result !== '0' && <Text style={styles.textResultSmall}>{result}</Text>}
      <Text style={styles.textResult} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalculator text="C" colour="#9B9B9B" handleCallback={clear} />
        <ButtonCalculator
          text="+/-"
          colour="#9B9B9B"
          handleCallback={positiveNegative}
        />
        <ButtonCalculator
          text="del"
          colour="#9B9B9B"
          handleCallback={deleteNumber}
        />
        <ButtonCalculator
          text="/"
          colour="#FF9427"
          handleCallback={btnDivide}
        />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="7" handleCallback={buildNumber} />
        <ButtonCalculator text="8" handleCallback={buildNumber} />
        <ButtonCalculator text="9" handleCallback={buildNumber} />
        <ButtonCalculator
          text="x"
          colour="#FF9427"
          handleCallback={btnMultiply}
        />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="4" handleCallback={buildNumber} />
        <ButtonCalculator text="5" handleCallback={buildNumber} />
        <ButtonCalculator text="6" handleCallback={buildNumber} />
        <ButtonCalculator text="-" colour="#FF9427" handleCallback={btnRest} />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="1" handleCallback={buildNumber} />
        <ButtonCalculator text="2" handleCallback={buildNumber} />
        <ButtonCalculator text="3" handleCallback={buildNumber} />
        <ButtonCalculator text="+" colour="#FF9427" handleCallback={btnSum} />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="0" ancho={true} handleCallback={buildNumber} />
        <ButtonCalculator text="." handleCallback={buildNumber} />
        <ButtonCalculator
          text="="
          colour="#FF9427"
          handleCallback={calculate}
        />
      </View>
    </View>
  );
}

export default CalculatorScreen;

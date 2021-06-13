import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonCalculator from '../components/ButtonCalculator';
import {styles} from '../theme/AppTheme';

enum Operators {
  sum,
  rest,
  multiply,
  divide,
}

function CalculatorScreen() {
  const [result, setResult] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  function clear() {
    setNumber('0');
    setResult('0');
  }

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

  function deleteNumber() {
    let negative = '';
    let numberTemporary = number;

    if (number.includes('-')) {
      negative = '-';
      numberTemporary = number.substr(1);
    }

    if (numberTemporary.length > 1) {
      setNumber(negative + numberTemporary.slice(0, -1));
    } else {
      setNumber('0');
    }
  }

  function changeNumberByPrevious() {
    if (number.endsWith('.')) {
      setResult(number.slice(0, -1));
    } else {
      setResult(number);
    }
    setNumber('0');
  }

  function btnDivide() {
    changeNumberByPrevious();
    lastOperation.current = Operators.divide;
  }

  function btnMultiply() {
    changeNumberByPrevious();
    lastOperation.current = Operators.multiply;
  }

  function btnRest() {
    changeNumberByPrevious();
    lastOperation.current = Operators.rest;
  }

  function btnSum() {
    changeNumberByPrevious();
    lastOperation.current = Operators.sum;
  }

  function calculate() {
    const num1 = Number(number);
    const num2 = Number(result);

    switch (lastOperation.current) {
      case Operators.sum:
        setNumber(`${num1 + num2}`);
        break;

      case Operators.rest:
        setNumber(`${num2 - num1}`);
        break;

      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;

      case Operators.divide:
        setNumber(`${num2 / num1}`);
        break;
    }

    setResult('0');
  }

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

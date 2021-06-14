import {useState, useRef} from 'react';

enum Operators {
  sum,
  rest,
  multiply,
  divide,
}

export const useCalculator = () => {
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

  return [
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
  ];
};

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';
import {styles} from './src/theme/AppTheme';

function App() {
  return (
    <SafeAreaView style={styles.background}>
      <CalculatorScreen />
    </SafeAreaView>
  );
}

export default App;

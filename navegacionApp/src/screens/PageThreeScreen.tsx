import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

function PageThreeScreen(props: any) {
  const {navigation} = props;

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>PageThreeScreen</Text>

      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir a la pagina 1" onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default PageThreeScreen;

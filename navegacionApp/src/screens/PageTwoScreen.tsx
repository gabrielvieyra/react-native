import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

function PageTwoScreen(props: any) {
  const {navigation} = props;

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>PageTwoScreen</Text>

      <Button
        title="Ir a la pagina 3"
        onPress={() => navigation.navigate('PageThreeScreen')}
      />
    </View>
  );
}

export default PageTwoScreen;

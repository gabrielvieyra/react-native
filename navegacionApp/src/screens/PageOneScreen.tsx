import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

function PageOneScreen(props: any) {
  const {navigation} = props;

  console.log(navigation);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>PageOneScreen</Text>

      <Button
        title="Ir a la pagina 2"
        onPress={() => navigation.navigate('PageTwoScreen')}
      />

      <Text>Navegar con argumentos</Text>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PersonScreen', {
            id: 1,
            nombre: 'Pedro',
          })
        }>
        <Text>Pedro</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PageOneScreen;

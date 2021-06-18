import React, {useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

function PageOneScreen({navigation}: any) {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

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

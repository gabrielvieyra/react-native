import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';

function PersonScreen(props: any) {
  console.log(props.route.params);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>PersonScreen</Text>
    </View>
  );
}

export default PersonScreen;

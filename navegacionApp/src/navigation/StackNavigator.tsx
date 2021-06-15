import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import PageOneScreen from '../screens/PageOneScreen';
import PageThreeScreen from '../screens/PageThreeScreen';
import PageTwoScreen from '../screens/PageTwoScreen';
import PersonScreen from '../screens/PersonScreen';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      //initialRouteName="PageTwoScreen"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="PageOneScreen" component={PageOneScreen} />
      <Stack.Screen
        name="PageTwoScreen"
        component={PageTwoScreen}
        options={{
          title: 'sasasa',
        }}
      />
      <Stack.Screen name="PageThreeScreen" component={PageThreeScreen} />
      <Stack.Screen name="PersonScreen" component={PersonScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;

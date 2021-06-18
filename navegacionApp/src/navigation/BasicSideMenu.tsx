import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

function BasicSideMenu() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}

export default BasicSideMenu;

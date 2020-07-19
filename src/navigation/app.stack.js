import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// routes
import {appRoutes} from './root.routes';
const {HOME_SCREEN, SETTINGS_SCREEN} = appRoutes;

// screens
import HomeScreen from '~/screens/appStack/HomeScreen';
import SettingsScreen from '~/screens/appStack/SettingsScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={SETTINGS_SCREEN} component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;

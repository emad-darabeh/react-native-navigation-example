import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// routes
import {authRoutes} from './root.routes';
const {SIGNIN_SCREEN, SIGNUP_SCREEN} = authRoutes;

// screens
import SigninScreen from '~/screens/authStack/SigninScreen';
import SignupScreen from '~/screens/authStack/SignupScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={SIGNIN_SCREEN} component={SigninScreen} />
      <Stack.Screen name={SIGNUP_SCREEN} component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

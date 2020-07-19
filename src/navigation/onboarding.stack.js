import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// routes
import {onboardingRoutes} from './root.routes';
const {ONBOARDING_SCREEN} = onboardingRoutes;

// screens
import OnboardingScreen from '~/screens/onboardingStack/OnboardingScreen';

const Stack = createStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name={ONBOARDING_SCREEN}
        component={OnboardingScreen}
        headerMode="screen"
      />
    </Stack.Navigator>
  );
};

export default OnboardingStack;

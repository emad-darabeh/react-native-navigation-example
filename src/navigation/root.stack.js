import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// redux
import {connect} from 'react-redux';

// selectors
import {createStructuredSelector} from 'reselect';
import {selectFirstVisit} from '~/redux/app/app.selectors';
import {selectAuthenticated} from '~/redux/auth/auth.selectors';

// routs
import {rootRoutes} from './root.routes';
const {ONBOARDING_STACK, APP_STACK, AUTH_STACK} = rootRoutes;

// stacks
import OnboardingStack from './onboarding.stack';
import AuthStack from './auth.stack';
import AppStack from './app.stack';

const Stack = createStackNavigator();

const chooseScreen = (authenticated, firstVisit) => {
  if (firstVisit)
    return <Stack.Screen name={ONBOARDING_STACK} component={OnboardingStack} />;

  if (authenticated)
    return <Stack.Screen name={APP_STACK} component={AppStack} />;

  return <Stack.Screen name={AUTH_STACK} component={AuthStack} />;
};

const RootStack = ({authenticated, firstVisit}) => {
  return (
    <Stack.Navigator headerMode="none">
      {chooseScreen(authenticated, firstVisit)}
    </Stack.Navigator>
  );
};

const mapStateToProps = createStructuredSelector({
  authenticated: selectAuthenticated,
  firstVisit: selectFirstVisit,
});

export default connect(mapStateToProps)(RootStack);

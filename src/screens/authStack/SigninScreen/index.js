import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

// routes
import {authRoutes} from '~/navigation/root.routes';

// redux
import {connect} from 'react-redux';

// actions
import {signin} from '~/redux/auth/auth.actions';

// selectors
import {createStructuredSelector} from 'reselect';
import {selectLoading, selectError} from '~/redux/auth/auth.selectors';

// components
import CustomButton from '~/components/CustomButton';

const SigninScreen = ({navigation, signin, loading, error}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signin Screen</Text>
      <CustomButton text="Signin" onPress={() => signin()} loading={loading} />

      <CustomButton
        text="Go to Signup Screen"
        onPress={() => navigation.navigate(authRoutes.SIGNUP_SCREEN)}
      />
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  error: selectError,
});

const mapActionsToProps = {
  signin,
};

export default connect(mapStateToProps, mapActionsToProps)(SigninScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e88e5',
    padding: 16,
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    height: 56,
    marginTop: 32,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e91e63',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

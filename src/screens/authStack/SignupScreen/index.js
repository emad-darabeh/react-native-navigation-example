import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

// routes
import {authRoutes} from '~/navigation/root.routes';

// redux
import {connect} from 'react-redux';

// actions
import {signup} from '~/redux/auth/auth.actions';

// selectors
import {createStructuredSelector} from 'reselect';
import {selectLoading, selectError} from '~/redux/auth/auth.selectors';

const SigninScreen = ({navigation, loading, error, signup}) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#e91e63" />
      ) : (
        <>
          <Text style={styles.text}>Signup Screen</Text>

          <TouchableOpacity style={styles.button} onPress={() => signup()}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(authRoutes.SIGNIN_SCREEN)}>
            <Text style={styles.buttonText}>Go to Signin Screen</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  error: selectError,
});

const mapActionsToPops = {
  signup,
};

export default connect(mapStateToProps, mapActionsToPops)(SigninScreen);

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

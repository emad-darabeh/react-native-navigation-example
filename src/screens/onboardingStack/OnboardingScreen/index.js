import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

// redux
import {connect} from 'react-redux';

// actions
import {setFirstVisit} from '~/redux/app/app.actions';

const OnboardingScreen = ({setFirstVisit}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>on boarding</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setFirstVisit(false)}>
        <Text style={styles.text}>next</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapActionsToProps = {
  setFirstVisit,
};

export default connect(null, mapActionsToProps)(OnboardingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

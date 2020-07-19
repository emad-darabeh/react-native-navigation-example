import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// routes
import {appRoutes} from '~/navigation/root.routes';

const SettingsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(appRoutes.HOME_SCREEN)}>
        <Text style={styles.buttonText}>Go to Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

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

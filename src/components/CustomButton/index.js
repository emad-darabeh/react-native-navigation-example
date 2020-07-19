import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

const CustomButton = ({ text, loading, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: loading ? "#f48fb1" : "#e91e63",
      }}
      onPress={() => {
        if (!loading) onPress();
      }}
    >
      <View style={styles.buttonContent}>
        {loading && <ActivityIndicator color="#ffffff" />}
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 56,
    alignSelf: "stretch",
    marginVertical: 8,
  },
  buttonContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    marginStart: 8,
    fontSize: 18,
    color: "#fff",
  },
});

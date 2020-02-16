import React from "react";
import { Text, View, StyleSheet } from "react-native";

const FontSizeButton = () => {
  setPress = () => {
    console.log("@@@@@@@@@@@");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => setPress()}>A</Text>
    </View>
  );
};

export default FontSizeButton;

var styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    backgroundColor: "blue"
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    // fontFamily: "Times New Roman"
  }
});

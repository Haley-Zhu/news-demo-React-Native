import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { useDispatch } from "redux-react-hook";
import { setFontSliderVisible as setFontSliderVisibleAction } from "../redux/actions";

const FontSizeButton = () => {
  const dispatch = useDispatch();
  onTextPress = () => {
    dispatch(setFontSliderVisibleAction(true));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => onTextPress()}>
        A
      </Text>
    </View>
  );
};

export default FontSizeButton;

var styles = StyleSheet.create({
  container: {
    marginRight: 20
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 10,
    fontFamily: Platform.OS === "android" ? "serif" : "Georgia"
  }
});

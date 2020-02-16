import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useDispatch } from "redux-react-hook";
import { setFontSliderVisible as setFontSliderVisibleAction } from '../redux/actions';

const FontSizeButton = () => {
  const dispatch = useDispatch();
  onTextPress = () => {
    console.log("@@@@@@@@@@@");
    dispatch(setFontSliderVisibleAction(true));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => onTextPress()}>A</Text>
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

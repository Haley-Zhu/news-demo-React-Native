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
    // paddingHorizontal: 30,
    // backgroundColor: "blue"
    marginRight: 20,
    borderColor: "black",
    borderWidth: 3
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 20,
    // fontFamily: "Times New Roman"
  }
});

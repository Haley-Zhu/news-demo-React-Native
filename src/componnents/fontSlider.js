import React, { useState } from "react";
import {
  StyleSheet,
  Slider,
  View
} from "react-native";
import Modal from "react-native-modal";
import { useDispatch, useMappedState } from "redux-react-hook";
import { setFontSliderVisible as setFontSliderVisibleAction } from '../redux/actions';

const FontSlider = () => {
  const dispatch = useDispatch();
  const isFontSliderVisible = useMappedState(state => state.isFontSliderVisible);

  _onValueChange = value => {
    console.log("!!!!!!!!!", value);
  };

  return (
    <Modal
      isVisible={isFontSliderVisible}
      backdropOpacity={0}
      animationInTiming={0}
      animationOutTiming={0}
      onBackdropPress={() => dispatch(setFontSliderVisibleAction(false))}
    >
      <View style={viewStyles.test}>
        <Slider
          style={viewStyles.slider}
          minimumValue={0}
          maximumValue={5}
          step={1}
          onValueChange={_onValueChange}
        />
      </View>
    </Modal>
  );
};

export default FontSlider;

const viewStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 300,
    height: 30
  },
  test: {
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 20
  },
  slider: {
    // width: 300,
    paddingHorizontal: 40,
    height: 40
  }
});

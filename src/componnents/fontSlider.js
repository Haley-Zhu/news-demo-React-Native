import React from "react";
import { StyleSheet, Slider, View } from "react-native";
import Modal from "react-native-modal";
import { useDispatch, useMappedState } from "redux-react-hook";
import { setFontSliderVisible as setFontSliderVisibleAction } from "../redux/actions";
import { modifyFontSize as modifyFontSizeAction } from "../redux/actions";
import { fontSizeGroup } from "../utils/constants";

const FontSlider = () => {
  const dispatch = useDispatch();
  const isFontSliderVisible = useMappedState(
    state => state.isFontSliderVisible
  );
  const fontValue = useMappedState(state => state.fontValue);

  _onValueChange = value => {
    dispatch(modifyFontSizeAction(value));
  };

  return (
    <Modal
      isVisible={isFontSliderVisible}
      backdropOpacity={0}
      animationInTiming={0}
      animationOutTiming={0}
      onBackdropPress={() => dispatch(setFontSliderVisibleAction(false))}
    >
      <View style={viewStyles.toast}>
        <Slider
          style={viewStyles.slider}
          minimumValue={0}
          maximumValue={fontSizeGroup.length - 1}
          step={1}
          value={fontValue}
          onValueChange={_onValueChange}
        />
      </View>
    </Modal>
  );
};

export default FontSlider;

const viewStyles = StyleSheet.create({
  toast: {
    top: 100,
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 15,
    marginHorizontal:20
  },
  slider: {
    paddingHorizontal: 40
  }
});

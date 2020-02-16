import React, { useState } from "react";
import {
  StyleSheet,
  Slider,
  View
} from "react-native";
import Modal from "react-native-modal";

const SliderToast = () => {
  const [modalVisible, setModalVisible] = useState(true);

  _onValueChange = value => {
    console.log("!!!!!!!!!", value);
  };

  return (
    <Modal
      isVisible={modalVisible}
      backdropOpacity={0}
      animationInTiming={0}
      animationOutTiming={0}
      onBackdropPress={() => setModalVisible(false)}
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

export default SliderToast;

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

import { initailFontValue } from "../utils/constants";

const initialState = {
  fontValue: initailFontValue,
  isFontSliderVisible: false
};

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "MODIFY_FONTSIZE":
      newState = {
        ...state,
        fontValue: action.value
      };
      break;
    case "SHOW_FONTSLIDER":
      newState = {
        ...state,
        isFontSliderVisible: action.isFontSliderVisible
      };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};
export default reducer;

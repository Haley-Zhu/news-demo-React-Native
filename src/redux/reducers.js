const initialState = {
  fontSize: 20,
  isFontSliderVisible: false
};

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "MODIFY_FONTSIZE":
      newState = {
        ...state,
        fontSize: action.value,
      };
      break;
      case "SHOW_FONTSLIDER":
        newState = {
          ...state,
          isFontSliderVisible: action.isFontSliderVisible,
        };
        break;
    default:
      newState = state;
      break;
  }; 
  console.log("^^^^^^^^^^^^", newState.fontSize, newState.isFontSliderVisible);
  return newState;
}
export default reducer;
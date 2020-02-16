const initialState = {
  fontSize: 20
};

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "MODIFY_FONTSIZE":
      newState = {
        ...state,
        fontSize: action.preload,
      };
      break;
    default:
      newState = state;
      break;
  }; 
  console.log("^^^^^^^^^^^^", newState.fontSize);
  return newState;
}
export default reducer;
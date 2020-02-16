import React from "react";
import AppNavigator from "./src/navigators/AppNavigator";
import store from "./src/redux/store";
import { StoreContext } from "redux-react-hook";

export default function App() {
  return (
    <StoreContext.Provider value={store}>
      <AppNavigator />
    </StoreContext.Provider>
  );
}

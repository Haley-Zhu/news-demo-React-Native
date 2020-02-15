import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ListPage from "../pages/listPage";
import React from "react";

const RootStack = createStackNavigator(
  {
    List: {screen: ListPage},
  },
  // {
  //   initialRouteName: "List"
  // }
);

const AppContainer = createAppContainer(RootStack);

export default function AppNavigator() {
  return <AppContainer />;
}

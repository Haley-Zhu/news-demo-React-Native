import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ListPage from "../pages/ListPage";
import DetailsPage from "../pages/DetailsPage";
import React from "react";

const RootStack = createStackNavigator(
  {
    List: { screen: ListPage },
    Detail: { screen: DetailsPage }
  },
  {
    initialRouteName: "List"
  }
);

const AppContainer = createAppContainer(RootStack);

export default function AppNavigator() {
  return <AppContainer />;
}

import React from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerActions
} from "react-navigation";
import Sidebar from "../assets/module/Sidebar";
import Home from "../screen/Home";

const navigation = createStackNavigator(
  {
    Home: Home
  },
  {
    headerMode: "none",
    initialRouteName: "Home"
  }
);

const Root = createDrawerNavigator(
  {
    navigation: navigation
  },
  {
    contentComponent: props => {
      const navigate = route => {
        props.navigation.navigate(route);
        props.navigation.dispatch(DrawerActions.closeDrawer());
      };
      return <Sidebar handlePress={navigate} {...props} />;
    }
  }
);

export default Root;

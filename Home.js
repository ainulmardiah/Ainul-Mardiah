import React from "react";
import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Bmi from './Bmi.js';
import Kurs from './Kurs.js';
import About from './About.js';
import MainScreen from './Main.js';
const AppNavigator = createStackNavigator(
    {
        Utama: MainScreen,
        Bmi: Bmi,
        Kurs: Kurs,
        About: About,
    },
    {
        initialRouteName: "Utama"
    }
);
export default createAppContainer(AppNavigator);

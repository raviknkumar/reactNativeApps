import HomeStackNavigator from "./HomeStackNavigator";
import AboutNavigator from "./AboutStack";
import {createAppContainer} from "react-navigation";

import {createDrawerNavigator} from "react-navigation-drawer"

const routes = {
    Home: {
        screen: HomeStackNavigator
    },
    About: {
        screen: AboutNavigator
    }
};

const Navigator = createDrawerNavigator(routes);
export default createAppContainer(Navigator);
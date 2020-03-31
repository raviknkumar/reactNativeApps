import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import About from "../components/About";
import {createAppContainer} from "react-navigation";
import Header from "../shared/Header";

const routes = {
    About: {
        screen: About,
        navigationOptions: ({navigation}) => {
            return {
                headerTintColor:'white', // textColor in the toolbar
                headerTitle: () => {return <Header navigation={navigation} title={"About Movie Zone"}/>},
                headerStyle: {
                    backgroundColor: 'coral',
                }
            }
        }
    }
};
const AboutNavigator = createStackNavigator(routes, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor:'#ddd',
            height:60,
        }
    }
});

export default AboutNavigator;
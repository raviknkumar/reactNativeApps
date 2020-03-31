import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

import React from 'react';
import Home from './../components/Home'
import ReviewDetails from './../components/ReviewDetails'
import Header from "../shared/Header";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return {
                headerTintColor:'white', // textColor in the toolbar
                headerTitle: () => {return <Header navigation={navigation} title={"Movie Zone"}/>},
                headerStyle: {
                    backgroundColor: 'coral',
                }
            }
        }
    }, // default scren is the 1st screen inside this object
    ReviewDetails: {
        screen: ReviewDetails,
    }
};

const homeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: 'white',
        headerStyle:{
            backgroundColor: 'coral',
        }
    }
});
export default createAppContainer(homeStack); // wrap it inside a createAppContainer to render it as a component

// title: "Movie Zone", title can be used to give text, instead use headerTitle, to pass a function
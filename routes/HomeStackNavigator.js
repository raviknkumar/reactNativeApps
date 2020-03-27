import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

import Home from './../components/Home'
import ReviewDetails from './../components/ReviewDetails'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            headerTintColor:'white', // textColor in the toolbar
            headerStyle: {
                title: "Movie Zone",
                backgroundColor: 'coral',
            }
        }
    }, // default scren is the 1st screen inside this object
    ReviewDetails: {
        screen: ReviewDetails
    }
};

const homeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle:{
            // height: 100,
            backgroundColor: '#ddd',
        }
    }
});
export default createAppContainer(homeStack); // wrap it inside a createAppContainer to render it as a component
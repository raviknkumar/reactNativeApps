import React from 'react';
import {StyleSheet, View, Text} from 'react-native'
import {globalStyles} from "../styles/global";

const About = (props) => {
    return (
        <View style={globalStyles.container}>
            <Text>About</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {}
});

export default About;
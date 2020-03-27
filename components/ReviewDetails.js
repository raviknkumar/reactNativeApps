import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native'
import {globalStyles} from "../styles/global";
import {AntDesign} from "@expo/vector-icons";

const ReviewDetails = ({navigation}) => {

    const navigateBack = () => navigation.goBack();
    const rating = navigation.getParam('rating');

    return (
        <View style={globalStyles.container}>
            <Text>ReviewDetails Screen</Text>
            <Text style={[globalStyles.titleText, styles.header]}>{navigation.getParam('title')} </Text>
            <Text style={styles.headerText}> Rating </Text>
            <AntDesign name={"star"} color={"green"} size={20}/>
            <Text>{navigation.getParam('rating')} </Text>
            <Text>{navigation.getParam('body')} </Text>
            <Button onPress={navigateBack} title={"Go To Previous Screen"}/>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'coral',
        padding: 3,
        color: 'white',
    }, headerText : {
        marginVertical: 5,
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'nunito-regular'
    }
});

export default ReviewDetails;
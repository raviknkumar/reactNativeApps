import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';


export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> My Todos </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'coral',
        height: 80,
        paddingTop: 30,
        fontSize: 40,
        justifyContent: 'center'
    },

    title : {
        textAlign: 'center',
        color: '#fff',
    }
});
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';

export default function Todo(params) {
    const {item, removeTodo} = params;
    return (
        <TouchableOpacity onPress={() => {
            removeTodo(item.id)
        }}>
            <View style={styles.textView}>
                <MaterialIcons name={"delete"} size={18} color={'#333'}/>
                <Text style={{fontSize: 20, marginLeft: 20}}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    textView: {
        marginTop: 25,
        borderColor: '#ddd',
        borderWidth: 2,
        padding: 15,
        fontSize: 24,
        marginHorizontal: 20,
        flexDirection: 'row',
    },
    list:{
        marginTop: 20,
        flex: 1, // To Fix Problem that todos go off the screen, last to-do not visible
    },
});

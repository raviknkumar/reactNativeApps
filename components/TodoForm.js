import React, {useContext, useState} from 'react';
import {TodoContext} from "../contexts/TodoContext";

import {View, TextInput, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

export default function TodoForm(params) {

    const todoContext = useContext(TodoContext);
    const [todo, setTodo] = useState("");
    const {todos, setTodos} = todoContext;


    const addTodo = () => {

        if(todo.length < 3){
            Alert.alert(
                'Alert Title',
                'My Alert Msg',
                [
                    {text: 'Proceed', onPress: () => console.log('Proceed pressed'), style: 'cancel'},
                ],
                { cancelable: false }
            );
            return;
        }
        setTodos([...todos, {name: todo, id: todos.length + 1}]);
        setTodo("");
    };

    return(
        <View>
            <Text style={styles.container}> Todo</Text>
            <TextInput value={todo} style={styles.textInput} onChangeText = {(val) => {setTodo(val)}}/>
            <TouchableOpacity style={styles.submitButton} onPress={()=> {addTodo()}}>
                <Text style={{fontSize: 20, color:'white',
                    alignItems: 'center', textTransform: 'uppercase', padding: 10}}>
                    Add Todo </Text>
            </TouchableOpacity>
        </View>
    );


}

const styles = StyleSheet.create({

    container: {
        alignContent: 'center',
        textAlign: 'center'
    },

    textView : {
        marginTop: 25,
        backgroundColor: 'pink',
        padding: 15,
        fontSize:24,
        marginHorizontal: 20
    },

    textInput: {
        borderColor: '#444',
        borderWidth: 2,
        borderRadius: 5,
        margin: 5,
        height: 30
    },

    submitButton: {
        alignItems: 'center',
        marginTop: 10,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'coral',
    }
});
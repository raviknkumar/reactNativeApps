import React, {useContext} from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {TodoContext} from "../contexts/TodoContext";
import Todo from "./Todo";

export default function TodoList(params) {

    const todoContext = useContext(TodoContext);
    const {todos, setTodos, removeTodo} = todoContext;
    const todoList = [];

    return (
        <View style={styles.list}>
        <FlatList
                keyExtractor={(item) => item.id}
                data={todos}
                renderItem={
                    ({item}) =>
                        <Todo item={item} removeTodo={removeTodo}/>
                }
            />
        </View>
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
    },
    list:{
        marginTop: 20,
        flex: 1, // To Fix Problem that todos go off the screen, last to-do not visible
    }
});
import React, {createContext, useState} from "react";
import {View, StyleSheet} from 'react-native';

// use reducer if necessary
export const TodoContext = createContext();

const TodoContextProvider = (props) => {

    const [todos, setTodos] = useState([
        {name: "Go to Market", id: 1},
        {name: "Buy Vegetables ", id: 2},
        {name: "Read Books", id: 3},
    ]);

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <View style={styles.content}>
            <TodoContext.Provider value={{todos, setTodos, removeTodo}}>
                {props.children}
            </TodoContext.Provider>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1, // take the space available , after allocationg space For Header
        padding:40,
    }
});

export default TodoContextProvider;
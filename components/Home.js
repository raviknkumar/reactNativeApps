import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from 'react-native'
import {globalStyles} from './../styles/global.js';

const Home = (props) => {

    const [reviews, setReviews] = useState([
        {title: 'Bahubali The Conclusion', rating: 5, body: 'A legendary Film ', id: 1},
        {title: 'Bahubali The Beginning', rating: 4, body: 'A Nice Film ', id: 2},
        {title: 'Sarileru Neekevvaru', rating: 3, body: 'A Good Film ', id: 3},
    ]);

    const {navigation} = props; // comes due to stack Navigator, as Home is a screen used in it

    return (
        <View style={globalStyles.container}>
            <Text>Home</Text>
            <FlatList
                data={reviews}
                renderItem={ ({item}) => (
                    <TouchableOpacity style={styles.reviewItem} onPress={()=> {navigation.navigate('ReviewDetails', item)}}>
                        <Text style={globalStyles.titleText}> {item.title} </Text>
                    </TouchableOpacity>
                )
                }/>
        </View>
    );
};

const styles = StyleSheet.create({
    reviewItem:{
        padding: 20,
        borderWidth: 2,
        borderColor: '#ddd',
        marginVertical: 5,
    }
});

export default Home;
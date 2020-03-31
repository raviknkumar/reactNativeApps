import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, Keyboard} from 'react-native'
import {globalStyles} from './../styles/global.js';
import {MaterialIcons} from "@expo/vector-icons";
import MovieForm from "./MovieForm";
import {TouchableWithoutFeedback} from "react-native-web";

const Home = (props) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        {title: 'Bahubali The Conclusion', rating: 5, body: 'A legendary Film ', id: '1'},
        {title: 'Bahubali The Beginning', rating: 4, body: 'A Nice Film ', id: '2'},
        {title: 'Sarileru Neekevvaru', rating: 3, body: 'A Good Film ', id: '3'},
    ]);

    const addReview = (review) => {
        review.id = Math.random();
        review.rating = parseInt(review.rating);
        console.log(review);
        setReviews([review, ...reviews]);
    };

    const {navigation} = props; // comes due to stack Navigator, as Home is a screen used in it

    return (
        <View style={globalStyles.container}>
            <View style={styles.modalToggle}>
                <MaterialIcons name={"add"} size={24} onPress={() => {
                    setModalOpen(true)
                }}/>
                <Modal visible={modalOpen} animationType={'slide'}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.modalContent}>
                            <MaterialIcons name={"close"} size={24}
                                           style={{...styles.modalToggle, ...styles.modalClose}}
                                           onPress={() => {setModalOpen(false)}}/>
                            <MovieForm addReview={addReview}/>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>

            <FlatList
                keyExtractor = {item => item.id.toString()}
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
    },

    modalToggle:{
        marginTop: 10,
        borderColor: '#ddd',
        borderRadius: 6,
        padding: 10,
        alignSelf: 'center',
    },
    modalClose: {
        backgroundColor:"red",
        borderRadius: 50,
        color: 'white',
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent:{
        flex:1
    }
});

export default Home;
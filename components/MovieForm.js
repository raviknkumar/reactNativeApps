import React from 'react';
import {View, StyleSheet, TextInput, Button, Text} from 'react-native';
import {Formik, Form, Field, ErrorMessage} from "formik";
import {globalStyles} from "../styles/global";
import * as yup from 'yup';
import {FlatButton} from "../shared/FlatButton";

const MovieForm = ({addReview}) => {

    const reviewSchema =yup.object({
        title: yup.string()
            .required()
            .min(3, "Title Should be Atleast 3 characters long"),
        body: yup.string()
            .required()
            .min(5,"Body Should be At least 5 characters long"),
        rating: yup.string()
            .required()
            .test('isRatingValid',"Rating Should be Between 1 and 5", (value) => {
                let ratingValue = parseInt(value);
                return ratingValue > 0 && ratingValue < 6;
            })
    });

    return(

        <View style={styles.contentForm}>
            <Formik
                validationSchema={reviewSchema}
                initialValues={{title: '', body: '', rating: ''}}
                    onSubmit={(values, actions) => {
                        addReview(values);
                        actions.resetForm(); //clear Form
                    }}
            >

                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.textInput}
                                   placeholder={"Enter Title"}
                                   onChangeText={props.handleChange('title')}
                                   value={props.values.title}
                                    onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorMessage}>{props.touched.title && props.errors.title}</Text>

                        <TextInput style={globalStyles.textInput}
                                   multiline minHeight={80}
                                   placeholder={"Enter Body"}
                                   value={props.values.body}
                                   onChangeText={props.handleChange('body')}
                                   onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorMessage}>{props.touched.body && props.errors.body}</Text>
                        <TextInput style={globalStyles.textInput}
                                   keyboardType={'numeric'}
                                   placeholder={"Enter Rating (0-5) "}
                                   value={props.values.rating}
                                   onChangeText={props.handleChange('rating')}
                                   onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorMessage}>{props.touched.rating && props.errors.rating}</Text>

                        <FlatButton text={"submit"} onPress={props.handleSubmit}/>
                    </View>
                )
                }
            </Formik>
        </View>
    );
};

const styles= StyleSheet.create({
    contentForm:{
        padding:20,
    },

});

export default MovieForm;

// props are default props provided by Formik
import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

export const FlatButton = ({text, onPress}) => {
  return(
      <View style={styles.button}>
          <TouchableOpacity onPress={onPress}>
              <Text style={styles.buttonText}>{text}</Text>
          </TouchableOpacity>
      </View>
  );
};

const  styles = StyleSheet.create({
    button:{
       backgroundColor: '#f01d71',
        paddingVertical: 14,
        paddingHorizontal: 10,
        borderRadius: 6
    },
    buttonText: {
        color:'white',
        textAlign: 'center',
        fontSize:16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
});
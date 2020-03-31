
import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    titleText:{
        fontFamily:'nunito-bold',
        fontSize: 18,
        color: '#333',
    },
    paragraph:{
        marginVertical: 8,
        lineHeight: 20,
    },
    container:{
        flex: 1,
        padding: 20,
    },
    textInput: {
        padding:5,
        marginVertical: 5,
        borderColor: '#444',
        borderRadius: 6,
        borderWidth: 1,
        fontSize: 18,
    },
    errorMessage: {
        padding:6,
        color:'crimson',
        fontSize:12,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});
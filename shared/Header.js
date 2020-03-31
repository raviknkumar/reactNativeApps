import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native'
import {MaterialIcons} from "@expo/vector-icons";

const Header = ({navigation, title}) => {
    return (
        <View style={styles.header}>

            <MaterialIcons name={"menu"} size={28} style={styles.menuIcon} onPress={()=>{navigation.openDrawer()}}/>

            <View style={styles.headerIcon}>
                <Image source={require("./../assets/movieIcon.png")} style={{width:30,height:30}}/>
                <Text style={styles.headerText}>
                    {title}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width:'100%',
        height: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },

    headerIcon:{
        display:'flex',
        alignContent:'center',
        flexDirection: 'row',
        justifyContent:'center',
        marginLeft: 50,
        alignSelf: 'center',
    },

    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        display:'flex',
        alignContent:'center',
        letterSpacing: 1,
        marginLeft: 10,
    },

    menuIcon: {
        position: 'absolute',
        left:16,
        color: 'white',
    }
});

export default Header;
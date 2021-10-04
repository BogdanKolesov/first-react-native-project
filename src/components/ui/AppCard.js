import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    default: {
        marginTop: 20,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000', //IOS
        shadowRadius: 2, //IOS
        shadowOpacity: 0.3, //IOS
        shadowOffset: { width: 2, height: 2 }, //IOS
        backgroundColor: '#fff', //IOS
        borderRadius: 10, //IOS
        elevation: 8 //ANDROID
    }
})

const AppCard = props => {
    return (
        <View style={{ ...styles.default, ...props.style }}>
            {props.children}
        </View>
    );
};

export default AppCard;
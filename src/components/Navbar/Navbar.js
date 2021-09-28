import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#3949ab',
        paddingBottom: 10
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

const Navbar = ({ title }) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text} >{title}</Text>
        </View>
    )
}

export default Navbar
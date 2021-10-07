import React from 'react'
import { View, StyleSheet } from 'react-native'
import THEME from '../../theme'
import { AppText } from '../ui'


const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontFamily: 'roboto-regular'
    }
})

const Navbar = ({ title }) => {
    return (
        <View style={styles.navbar}>
            <AppText style={styles.text} >{title}</AppText>
        </View>
    )
}

export default Navbar
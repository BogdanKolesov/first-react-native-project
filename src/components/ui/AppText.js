import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-regular'
    }
})

const AppText = props => {
    return (
        <Text style={{ ...styles.default, ...props.style }}>
            {props.children}
        </Text>
    );
};

export default AppText;
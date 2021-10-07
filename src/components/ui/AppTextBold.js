import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-bold'
    }
})

const AppTextBold = props => {
    return (
        <Text style={{ ...styles.default, ...props.style }}>
            {props.children}
        </Text>
    );
};

export default AppTextBold;
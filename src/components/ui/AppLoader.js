import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const AppLoader = () => {
    return (
        <View style={styles.center}>
            <ActivityIndicator size="large" color={THEME.MAIN_COLOR} />
        </View>
    );
};

export default AppLoader;
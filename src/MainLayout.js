import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from './components/Navbar';
import MainScreen from './components/Views/MainScreen/MainScreen';
import TodoScreen from './components/Views/TodoScreen';
import { ScreenContext } from './context/screen/screenContext';
import THEME from './theme';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        flex: 0.8,
        marginTop: 20
    },
    list: {
        width: '100%',
    },
    wrapper: {
        flex: 1
    }
});

const MainLayout = () => {
    const { todoId } = useContext(ScreenContext)

    return (
        <View style={styles.wrapper} >
            <Navbar title="Kolesov's to-do test App" />
            <View style={styles.container}>
                {todoId ? <TodoScreen /> : <MainScreen />}
            </View>
        </View>
    );
};

export default MainLayout;
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import THEME from '../../../theme';
import { AppCard } from '../../ui';

const styles = StyleSheet.create({
    screen: {
        width: '100%'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 20
    },
    card: {
        marginBottom: 20,
        padding: 15
    }
})

const TodoScreen = ({ goBack, todo }) => {
    return (
        <View style={styles.screen}>
            <AppCard style={styles.card}>
                <Text style={styles.title}>
                    {todo.title}
                </Text>
                <Button title='Ред.' />
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="Назад" color={THEME.GREY_COLOR} onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button title="Удалить" color={THEME.DANGER_COLOR} onPress={() => console.log('To remove')} />
                </View>
            </View>
        </View>
    );
};

export default TodoScreen;
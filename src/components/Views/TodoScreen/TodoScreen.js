import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


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
    }
})

const TodoScreen = ({ goBack, todo }) => {
    return (
        <View style={styles.screen}>
            <Text>
                {todo.title}
            </Text>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="Назад" color="#757575" onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button title="Удалить" color="#e53935" onPress={() => console.log('To remove')} />
                </View>
            </View>
        </View>
    );
};

export default TodoScreen;
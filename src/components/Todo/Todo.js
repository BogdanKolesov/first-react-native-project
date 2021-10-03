import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    todo: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginTop: 10
    }
})



const Todo = ({ todo, onRemove }) => {
    const longPressHandler = () => {
        onRemove(todo.id)
    }

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            // onPress={() => console.log('Pressed', todo.id)}
            onLongPress={longPressHandler}
        >
            <View style={styles.todo}>
                <Text>
                    {todo.title}
                </Text>
            </View>
        </TouchableOpacity >
    );
};

export default Todo;
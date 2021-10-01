import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

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


const Todo = ({ todo }) => {
    return (
        <View style={styles.todo}>
            <Text>
                {todo.title}
            </Text>
        </View>
    );
};

export default Todo;
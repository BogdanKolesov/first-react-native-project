import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 6
    },
    button: {

    },
    textInput: {
        width: '65%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#3949ab',
        marginRight: 5,
        padding: 2
    }
})

const AddTodo = () => {
    return (
        <View style={styles.block}>
            <TextInput style={styles.textInput} />
            <Button style={styles.button} title='Добавить' />
        </View>
    );
};

export default AddTodo;
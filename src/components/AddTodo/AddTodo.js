import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 6,
        marginBottom: 10
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

const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('  ')
        } else {
            //error
        }
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.textInput} value={value} placeholder="Введите текст..." onChangeText={text => setValue(text)} />
            <Button style={styles.button} title='Добавить' onPress={pressHandler} />
        </View>
    );
};

export default AddTodo;
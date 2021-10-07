import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import THEME from '../../theme';

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
        width: '75%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: THEME.MAIN_COLOR,
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
            Alert.alert('Ошибка. Пустое текстовое поле')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                keyboardType='default'
                style={styles.textInput}
                value={value}
                placeholder="Введите текст..."
                onChangeText={text => setValue(text)}
                autoCorrect
            />

            <AntDesign.Button onPress={pressHandler} name="pluscircleo">
                Добавить
            </AntDesign.Button>
            {/* <Button style={styles.button} title='Добавить' onPress={pressHandler} /> */}
        </View>
    );
};

export default AddTodo;
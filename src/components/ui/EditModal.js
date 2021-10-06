import React from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

const EditModal = ({ visible, onCancel }) => {
    return (
        <Modal visible={visible} animationType='slide' maxLength={false} transparent={false}>
            <View style={styles.wrap}>
                <TextInput placeholder='Введите название' autoCapitalize='none' autoCorrect={false} style={styles.input} />
                <View style={styles.buttons}>
                    <Button title='Отменить' onPress={onCancel} color={THEME.DANGER_COLOR} />
                    <Button title='Сохранить' />
                </View>
            </View>
        </Modal>
    );
};

export default EditModal;
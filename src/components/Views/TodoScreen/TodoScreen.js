import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import THEME from '../../../theme';
import { AppCard, EditModal, AppTextBold, AppButton } from '../../ui';


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

const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {

    const [modal, setModal] = useState(false);

    const saveHandler = title => {
        onSave(todo.id, title)
        setModal(false)
    }

    return (
        <View style={styles.screen}>
            <EditModal visible={modal} onCancel={() => setModal(false)} value={todo.title} onSave={saveHandler} />
            <AppCard style={styles.card}>
                <AppTextBold style={styles.title}>
                    {todo.title}
                </AppTextBold>
                <AppButton onPress={() => setModal(true)}>
                    <FontAwesome name='edit' size={20} />
                </AppButton>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton color={THEME.GREY_COLOR} onPress={goBack} >
                        <AntDesign name='back' size={20} color='#fff' />
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton color={THEME.DANGER_COLOR} onPress={() => onRemove(todo.id)}>
                        <FontAwesome name='remove' size={20} color='#fff' />
                    </AppButton>

                </View>
            </View>
        </View>
    );
};

export default TodoScreen;
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native';
import { ScreenContext } from '../../../context/screen/screenContext';
import { TodoContext } from '../../../context/todo/todoContext';
import THEME from '../../../theme';
import AddTodo from '../../AddTodo';
import Todo from '../../Todo';


const styles = StyleSheet.create({
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})

const MainScreen = ({ openTodo }) => {
    const { addTodo, todos, removeTodo } = useContext(TodoContext)
    const { changeScreen } = useContext(ScreenContext)
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2)

    useEffect(() => {
        const update = () => {
            width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
            setDeviceWidth(width)
        }
        Dimensions.addEventListener('change', update)

        return () => {
            Dimensions.removeEventListener('change', update)
        }
    });

    let content = (
        <View style={{ width: deviceWidth }}>
            <FlatList
                style={styles.list}
                keyExtractor={item => item.id.toString()}
                data={todos}
                scrollEnabled={true}
                renderItem={({ item }) => (
                    <Todo todo={item} onRemove={removeTodo} onOpen={changeScreen} />
                )}
            />
        </View>
    )

    if (todos.length === 0) {
        content = (
            <View style={styles.imgWrap}>
                <Image style={styles.image} source={require('../../../assets/images/no-items.png')} />
            </View>
        )
    }
    return (
        <View>
            <AddTodo onSubmit={addTodo} />

            {content}
        </View>
    );
};

export default MainScreen;
import React from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';
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

const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {

    let content = (
        <FlatList
            style={styles.list}
            keyExtractor={item => item.id.toString()}
            data={todos}
            scrollEnabled={true}
            renderItem={({ item }) => (
                <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
            )}
        />
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
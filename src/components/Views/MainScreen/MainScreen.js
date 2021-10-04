import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import AddTodo from '../../AddTodo';
import Todo from '../../Todo';

const styles = StyleSheet.create({

})

const MainScreen = ({ addTodo, todos, removeTodo }) => {
    return (
        <View>
            <AddTodo onSubmit={addTodo} />

            <FlatList
                style={styles.list}
                keyExtractor={item => item.id.toString()}
                data={todos}
                scrollEnabled={true}
                renderItem={({ item }) => (
                    <Todo todo={item} onRemove={removeTodo} />
                )}
            />
        </View>
    );
};

export default MainScreen;
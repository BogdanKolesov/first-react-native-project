import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


const styles = StyleSheet.create({

})

const TodoScreen = ({ goBack, todo }) => {
    return (
        <View>
            <Text>
                {todo.title}
            </Text>
            <Button title="Назад" onPress={goBack} />
        </View>
    );
};

export default TodoScreen;
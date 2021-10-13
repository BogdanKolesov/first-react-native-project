import React, { useState } from 'react';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import MainLayout from './src/MainLayout';
import TodoState from './src/context/todo/TodoState'
import ScreenState from './src/context/screen/ScreenState'

//ADD: Firebase
//ADD: cursive

async function loadApp() {
  await Font.loadAsync({
    'roboto-regular': require('./src/assets/fonts/Roboto/Roboto-Regular.ttf'),
    'roboto-bold': require('./src/assets/fonts/Roboto/Roboto-Bold.ttf')
  })
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApp}
        onFinish={() => setIsReady(true)}
        onError={() => console.log(err)}
      />
    )
  }
  return (

    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>


  );
}



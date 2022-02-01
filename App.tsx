import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text, View } from 'react-native'
import Navigation from './src/navigation/Navigation'
import {LogBox} from 'react-native';
import FadeScreen from './src/screens/FadeScreen';
import { GradiantProvider } from './src/context/GradiantContext';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


const App = () => {
  return (
    <NavigationContainer>
        <GradiantProvider>
          <Navigation/>
        </GradiantProvider>
    </NavigationContainer>
  )
}

export default App

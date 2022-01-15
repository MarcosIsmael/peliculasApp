// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';


const Stack = createStackNavigator();

function Navigation() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" options={{headerShown:false}} component={HomeScreen} />
        <Stack.Screen name="detailScreen" component={DetailScreen} />

      </Stack.Navigator>
  );
}

export default Navigation;
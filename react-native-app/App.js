import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Onboard from './components/Onboard';
import Profile from './components/Profile';
import Header from './components/Header';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
      <Header/>
      <Stack.Navigator>
        <Stack.Screen name="Onbord" component={Onboard} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
    

      
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

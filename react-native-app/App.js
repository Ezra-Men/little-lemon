import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from './components/Profile';
import Header from './components/Header';
import Onboard from './components/Onboard';
import Splash from './components/Splash';
const Stack = createNativeStackNavigator();
export default function App() {
  
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const isCompleted = await AsyncStorage.getItem('onboardingCompleted');
      setIsOnboardingCompleted(isCompleted === 'true');
      setIsLoading(false);
    };
    checkOnboardingStatus();
  }, []);

  if (isLoading) {
    return (
      <Splash/>
    );
  }

    
 
  return (
    <NavigationContainer>
      <Header/>
      <Stack.Navigator>
        {isOnboardingCompleted ? (
          <Stack.Screen
            name="Profile"
            component={Profile}
          />
        ) : (
          <Stack.Screen
            name="Onboarding"
            component={Profile}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

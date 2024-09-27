/**import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboard from './components/Onboard';
import Profile from './components/Profile';
import Header from './components/Header';
import Splash from './components/Splash';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const STORAGE_KEY = 'little-lemon'; // Define storage key

export default function App() {
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check onboarding status on app launch
    const checkOnboardingStatus = async () => {
      try {
        const isCompleted = await AsyncStorage.getItem(`${STORAGE_KEY}:onboardingCompleted`);
        setIsOnboardingCompleted(isCompleted === 'true');
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    checkOnboardingStatus();
  }, []);

  if (isLoading) {
    // Display splash screen during loading
    return (
      <Splash />
    );
  }

  if (error) {
    // Display error message
    return (
      <Text style={{
        color: '#495E57',
        fontSize: 18,
        padding: 20,
        backgroundColor: '#ccc'
      }}>
        Error: {error}
      </Text>
    );
  }

  if (isOnboardingCompleted === null) {
    // Display loading status
    return (
      <Text style={{
        color: '#495E57',
        fontSize: 18,
        padding: 20,
        backgroundColor: '#ccc'
      }}>
        Checking onboarding status...
      </Text>
    );
  }

  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator>
        {isOnboardingCompleted ? (
          <>
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerTintColor: '#F4CE14',
                headerStyle: {
                  backgroundColor: '#495E57',
                },
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Onboard"
              component={Onboard}
              options={{
                headerTintColor: '#F4CE14',
                headerStyle: {
                  backgroundColor: '#495E57',
                },
              }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerTintColor: '#F4CE14',
                headerStyle: {
                  backgroundColor: '#495E57',
                },
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}**/

import React from 'react';
import AppNavigator from './components/AppNavigator';
import { AppRegistry } from 'react-native';

const App = () => {
  return <AppNavigator />;
};

AppRegistry.registerComponent('main', () => App);

export default App;



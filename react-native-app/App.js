import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboard from './components/Onboard';
import Profile from './components/Profile';
import Header from './components/Header';
import Splash from './components/Splash';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const isCompleted = await AsyncStorage.getItem('onboardingCompleted');
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
    return <Splash />;
  }

  if (error) {
    return (
      <Text style={{ alignContent: 'center', verticalAlign: 'middle' }}>
        Error: {error}
      </Text>
    );
  }

  if (isOnboardingCompleted === null) {
    return (
      <Text style={{ alignContent: 'center', verticalAlign: 'middle' }}>
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
            <Stack.Screen name="Profile" component={Profile} />
          </>
        ) : (
          <>
            <Stack.Screen name="Onboard" component={Onboard} />
            <Stack.Screen name="Profile" component={Profile} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

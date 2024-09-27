import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Pressable, TextInput, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

function Onboard() {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleNext = async () => {
    try {
      await AsyncStorage.setItem('firstName', firstName);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('onboardingCompleted', 'true');
      navigation.navigate('Profile');
    } catch (error) {
      console.error('Error saving onboarding data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Let us get to know you</Text>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <Pressable onPress={handleNext} style={styles.button}>
        <Text>Next</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default Onboard;

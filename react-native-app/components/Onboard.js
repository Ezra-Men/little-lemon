import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Onboard = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleNext = async () => {
    try {
      await AsyncStorage.setItem('firstName', firstName);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('onboardingCompleted', 'true');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error saving onboarding data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's get started!</Text>
      <Text style={styles.subtitle}>We'll need some information from you.</Text>
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
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 24,
    color: '#495E57',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#495E57',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#495E57',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#F4CE14',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#495E57',
  },
});

export default Onboard;

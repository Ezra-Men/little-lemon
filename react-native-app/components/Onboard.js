import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Pressable, 
  TextInput,
  StatusBar 
} from 'react-native';

function Onboard() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Let us get to know you</Text>
      <TextInput 
        placeholder='First Name' 
        style={styles.input}
      />
      <TextInput 
        placeholder='Email' 
        keyboardType='email-address' 
        style={styles.input}
      />
      <Pressable 
        onPress={() => console.log('Next pressed')} 
        style={styles.button}
      >
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

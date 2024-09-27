import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import { MaskedTextInput } from 'react-native-mask-text';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const Profile = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState('');
  const [newsCheckbox, setNewsCheckbox] = useState(false);
  const [offersCheckbox, setOffersCheckbox] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const storedFirstName = await AsyncStorage.getItem('firstName');
      const storedEmail = await AsyncStorage.getItem('email');
      setFirstName(storedFirstName);
      setEmail(storedEmail);
    };
    fetchData();
  }, []);

  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleSaveChanges = async () => {
    await AsyncStorage.setItem('firstName', firstName);
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('phoneNumber', phoneNumber);
    await AsyncStorage.setItem('image', image);
    await AsyncStorage.setItem('newsCheckbox', newsCheckbox.toString());
    await AsyncStorage.setItem('offersCheckbox', offersCheckbox.toString());
    Alert.alert('Changes Saved');
  };

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Onboard');
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 20 }}>Personal Information</Text>
        <TouchableOpacity onPress={handleImagePicker}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
          ) : (
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: '#ccc',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 40 }}>
                {firstName && firstName[0].toUpperCase()}{' '}
                {email && email[0].toUpperCase()}
              </Text>
            </View>
          )}
        </TouchableOpacity>
        <TextInput
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          placeholder="First Name"
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 16,
          }}
        />
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 16,
          }}
        />
        <MaskedTextInput
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          mask="999-999-9999"
          placeholder="Phone Number"
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 16,
          }}
        />
        <CheckBox
          checked={newsCheckbox}
          onPress={() => setNewsCheckbox(!newsCheckbox)}
          title="Receive news and updates"
        />
        <CheckBox
          checked={offersCheckbox}
          onPress={() => setOffersCheckbox(!offersCheckbox)}
          title="Receive special offers"
        />
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            margin: 15,
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            onPress={handleSaveChanges}
            style={{
              backgroundColor: '#F4CE14',
              padding: 10,
              borderRadius: 10,
              width: 130,
              height: 40,
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            <Text style={{ color: '#000000' }}>Save Changes</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogout} style={{ backgroundColor: '#F4CE14', padding: 10, borderRadius: 10, width: 130, height:40, alignItems: 'center', marginTop: 20 }}>
            <Text style={{ color: '#000000' }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

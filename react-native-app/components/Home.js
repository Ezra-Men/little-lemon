import React from 'react';
import { View } from 'react-native';
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import SearchBar from '../components/SearchBar';
import MenuItems from '../components/MenuItems';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
      <Banner />
      <CategoryList />
      <SearchBar />
      <MenuItems />
    </View>
  );
};

export default Home;

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.banner}>
      <Text style={styles.title}>Little Lemon</Text>
      <Text style={styles.subtitle}>Fresh Food, Delivered</Text>
      <Image source={require('../assets/logo.jpg')} style={styles.image} />
      <View style={styles.searchBar}>
        <Text style={styles.searchText}>Search for dishes...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#F4CE14',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#495E57',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  searchBar: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  searchText: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
  },
});

export default Banner;

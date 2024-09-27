import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      // Execute search query
      console.log('Searching for:', searchText);
    }, 500);

    return () => clearTimeout(debounceSearch);
  }, [searchText]);

  return (
    <View>
      <TextInput
        placeholder="Search for dishes..."
        value={searchText}
        onChangeText={setSearchText}
        style={styles.searchBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});

export default SearchBar;

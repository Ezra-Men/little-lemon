import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getFilteredDishes } from '../database';

const categories = [
  { id: 1, name: 'Appetizers' },
  { id: 2, name: 'Entrees' },
  { id: 3, name: 'Sides' },
  { id: 4, name: 'Desserts' },
  { id: 5, name: 'Drinks' },
];

const CategoryList = ({ setSelectedCategories, selectedCategories }) => {
  const [categoryList, setCategoryList] = useState(categories);

  const handleSelectCategory = (category) => {
    if (selectedCategories.includes((categories.id))) {
      setSelectedCategories(selectedCategories.filter((id) => id !== (categories.id)));
    } else {
      setSelectedCategories([...selectedCategories, (categories.id)]);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryContainer,
              selectedCategories.includes((categories.id)) && styles.selectedCategory,
            ]}
            onPress={() => handleSelectCategory(item)}
          >
            <Text
              style={[
                styles.categoryName,
                selectedCategories.includes((categories.id)) && styles.selectedCategoryName,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => (item.name).toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  categoryContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  selectedCategory: {
    backgroundColor: '#F4CE14',
  },
  categoryName: {
    fontSize: 16,
  },
  selectedCategoryName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CategoryList;

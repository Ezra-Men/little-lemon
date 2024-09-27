import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getFilteredDishes } from '../database';

const MenuItems = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const filteredDishes = await getFilteredDishes([]);
        setDishes(filteredDishes);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };
    fetchDishes();
  }, []);

  const renderDish = ({ item }) => (
    <View style={styles.dishContainer}>
      <Text style={styles.dishName}>{item.name}</Text>
      <Text style={styles.dishDescription}>{item.description}</Text>
      <Text style={styles.dishPrice}>${item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={dishes}
          renderItem={renderDish}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  dishContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dishDescription: {
    fontSize: 14,
    color: '#666',
  },
  dishPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#008000',
  },
});

export default MenuItems;



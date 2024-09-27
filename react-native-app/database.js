import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('menu.db');

const createTables = async () => {
  await db.transaction(tx => {
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL
      );
    `);

    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS dishes (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        price REAL,
        category_id INTEGER,
        FOREIGN KEY (category_id) REFERENCES categories (id)
      );
    `);
  }, error => console.error('Error creating tables:', error));
};

const getFilteredDishes = async (selectedCategories) => {
  try {
    const query = `
      SELECT * FROM dishes
      WHERE category_id IN (${selectedCategories.join(',')})
    `;

    const result = await db.transaction(tx => {
      return tx.executeSql(query);
    });

    return result[0].rows._array;
  } catch (error) {
    console.error('Error fetching dishes:', error);
    return [];
  }
};

const getFilteredDishesBySearch = async (searchText, selectedCategories) => {
  try {
    const query = `
      SELECT * FROM dishes
      WHERE name LIKE '%${searchText}%'
      AND category_id IN (${selectedCategories.join(',')})
    `;

    const result = await db.transaction(tx => {
      return tx.executeSql(query);
    });

    return result[0].rows._array;
  } catch (error) {
    console.error('Error fetching dishes by search:', error);
    return [];
  }
};

export { createTables, getFilteredDishes, getFilteredDishesBySearch };



import AsyncStorage from '@react-native-async-storage/async-storage';

enum StorageKeys {
  'FAVORITE_LIST' = 'favoriteList'
}

// Basic storage functions
const setItem = (item: unknown, key: string) => {
  const value = typeof item !== 'string' ? JSON.stringify(item) : item;
  return AsyncStorage.setItem(key, value);
};

const getItem = async (key: string) => {
  const item = await AsyncStorage.getItem(key);
  return item ? item : null;
};

// Getters/Setters
const getFavoritesList = (): Promise<string | null> => {
  return getItem(StorageKeys.FAVORITE_LIST);
};

const setFavoritesList = async (list: string) => {
  return setItem(list, StorageKeys.FAVORITE_LIST);
};

export { getFavoritesList, setFavoritesList };

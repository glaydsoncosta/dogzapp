import { Breed } from '../interfaces/data';
import { getFavoritesList, setFavoritesList } from './storage';

const getSavedFavoriteList = async () => {
  let favoriteList: Breed[] = [];
  const savedFavoriteList = await getFavoritesList();
  if (savedFavoriteList) {
    favoriteList = JSON.parse(savedFavoriteList);
  }
  return favoriteList;
};

const favoriteBreed = async (breed: Breed) => {
  let favoriteList: Breed[] = [];
  const savedFavoriteList = await getFavoritesList();
  if (savedFavoriteList) {
    const savedFavoriteListObject = JSON.parse(savedFavoriteList);
    if (savedFavoriteListObject) {
      const isAlreadyFavorited = (savedFavoriteListObject as Breed[]).filter((item: Breed) => item.name === breed.name).length > 0;
      if (!isAlreadyFavorited) {
        (savedFavoriteListObject as Breed[]).push(breed);
        setFavoritesList(JSON.stringify(savedFavoriteListObject));
      } else {
        const updatedFavoriteList = (savedFavoriteListObject as Breed[]).filter((item: Breed) => item.name !== breed.name);
        setFavoritesList(JSON.stringify(updatedFavoriteList));
      }
    }
  } else {
    favoriteList.push(breed);
    setFavoritesList(JSON.stringify(favoriteList));
  }
};

const breedIsFavorited = async (breed: Breed) => {
  const savedFavoriteList = await getFavoritesList();
  if (savedFavoriteList) {
    const savedFavoriteListObject = JSON.parse(savedFavoriteList);
    if (savedFavoriteListObject) {
      return (savedFavoriteListObject as Breed[]).filter((item: Breed) => item.name === breed.name).length > 0;
    }
  }
  return false;
};

export { getSavedFavoriteList, favoriteBreed, breedIsFavorited };

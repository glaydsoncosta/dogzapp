import httpBaseInstance from './httpBaseInstance';
import { BreedImages, BreedImagesApiResponse, Breeds, BreedsApiResponse } from '../../interfaces/data';

const getBreeds = async () => {
  const breedList: Breeds = { list: [] };
  const { data } = await httpBaseInstance.get<BreedsApiResponse>('/breeds/list/all');
  // Data needs to be transformed in order to be shown in the FlatList component, so I'm traversing the whole object returned and building a new friendly object with breeds data
  if (data?.message) {
    Object.entries(data.message).map((entry) => {
      let key = entry[0];
      let value = entry[1];
      const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
      breedList.list.push({ name: capitalizedKey, types: value as string[] });
    });
  }
  return breedList;
};

const getBreedImages = async (breedName: string | undefined) => {
  const { data } = await httpBaseInstance.get<BreedImagesApiResponse>(`/breed/${breedName?.toLowerCase()}/images`);
  return data;
};

export { getBreeds, getBreedImages };

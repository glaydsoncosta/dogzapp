import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getBreedImages, getBreeds } from '../api/breedsApi';

export type UseGetBreedsParams = {
  onError?: (err: unknown) => void;
};

export type UseGetBreedImagesParams = {
  breedName?: string | undefined;
  onError?: (err: unknown) => void;
};

const useGetBreeds = ({ onError }: UseGetBreedsParams = {}) => {
  return useQuery(['breeds'], getBreeds, {
    onError
  });
};

const useGetBreedImages = ({ breedName, onError }: UseGetBreedImagesParams = {}) => {
  return useQuery(['breed-images'], () => getBreedImages(breedName), {
    onError
  });
};

export { useGetBreeds, useGetBreedImages };

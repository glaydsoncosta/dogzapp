// Data types
interface Breed {
  name: string;
  types: string[];
}

interface Breeds {
  list: Breed[];
}

interface BreedImages {
  message: string[];
}

// API responses
interface BreedsApiResponse {
  message: {};
}

interface BreedImagesApiResponse {
  message: string[];
}

export type { Breed, Breeds, BreedImages, BreedsApiResponse, BreedImagesApiResponse };

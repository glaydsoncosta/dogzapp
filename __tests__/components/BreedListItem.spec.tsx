import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import BreedListItem from '../../src/components/BreedListItem';
import { Breed } from '../../src/interfaces/data';

const testBreed = {
  name: 'Test',
  types: []
} as Breed;

test('Should render BreedListItem component', () => {
  const snapShot = renderer.create(<BreedListItem breed={testBreed} onPress={() => {}} />).toJSON();
  expect(snapShot).toMatchSnapshot();
});

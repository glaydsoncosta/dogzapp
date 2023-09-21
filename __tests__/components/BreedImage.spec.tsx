import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import BreedImage from '../../src/components/BreedImage';

test('Should render BreedImage component', () => {
  const snapShot = renderer.create(<BreedImage imageURL="https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg" onPress={() => {}} />).toJSON();
  expect(snapShot).toMatchSnapshot();
});

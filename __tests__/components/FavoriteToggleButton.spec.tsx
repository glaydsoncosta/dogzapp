import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import FavoriteToggleButton from '../../src/components/FavoriteToggleButton';

test('Should render FavoriteToggleButton component CHECKED', () => {
  const snapShot = renderer.create(<FavoriteToggleButton checked={true} onPress={() => {}} />).toJSON();
  expect(snapShot).toMatchSnapshot();
});

test('Should render FavoriteToggleButton component UNCHECKED', () => {
  const snapShot = renderer.create(<FavoriteToggleButton checked={false} onPress={() => {}} />).toJSON();
  expect(snapShot).toMatchSnapshot();
});

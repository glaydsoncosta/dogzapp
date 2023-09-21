import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../../src/components/Loader';

test('Loader snapshot', () => {
  const snapShot = renderer.create(<Loader />).toJSON();
  expect(snapShot).toMatchSnapshot();
});

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavBarBackButton from '../../src/components/NavBarBackButton';

test('Should render NavBarBackButton component', () => {
  const snapShot = renderer.create(<NavBarBackButton onPress={() => {}} />).toJSON();
  expect(snapShot).toMatchSnapshot();
});

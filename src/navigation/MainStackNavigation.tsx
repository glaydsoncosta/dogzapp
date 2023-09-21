import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from '../interfaces/navigation/MainStack';
import BreedImages from '../screens/BreedImages';
import { TabNavigationApp } from './TabNavigationApp';

const StackNavigation = createStackNavigator<MainStackParamList>();

export default function MainStackNavigation() {
  return (
    <StackNavigation.Navigator
      initialRouteName={'HomePage'}
      screenOptions={{
        headerShown: false
      }}
    >
      <StackNavigation.Screen
        name="BreedImages"
        component={BreedImages}
        options={{
          title: 'Breed Images'
        }}
      />
      <StackNavigation.Screen
        name="HomePage"
        component={TabNavigationApp}
        options={{
          headerTransparent: true,
          title: ''
        }}
      />
    </StackNavigation.Navigator>
  );
}

export type { MainStackParamList };

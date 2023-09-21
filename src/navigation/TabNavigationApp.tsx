import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import Favorites from '../screens/Favorites';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { black, gray, gray_600, primary } from '../styles/colors';
import { assets } from '../assets';

const Tab = createBottomTabNavigator();

export const TabNavigationApp = () => {
  const renderTabIcon = (image: any, focused: boolean) => {
    return (
      <View>
        <FastImage source={image} style={styles.tabIcon} resizeMode={FastImage.resizeMode.contain} tintColor={focused ? primary : gray_600} />
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabel: () => null,
        tabBarLabelPosition: 'below-icon',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: primary,
        tabBarInactiveTintColor: gray_600
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Breeds',
          tabBarIcon: ({ focused }) => renderTabIcon(assets.icons.bottomNavigation.breeds, focused)
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: 'Favorites',
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ focused }) => renderTabIcon(assets.icons.bottomNavigation.favorites, focused)
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    width: 22,
    height: 22
  }
});

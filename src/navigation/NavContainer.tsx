import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import React from 'react';
import MainStackNavigation from './MainStackNavigation';

export const NavContainer = () => {
  const routeNameRef = React.useRef<string>('');
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={async () => {
        routeNameRef.current = navigationRef?.getCurrentRoute()?.name ?? '';
      }}
    >
      {<MainStackNavigation />}
    </NavigationContainer>
  );
};

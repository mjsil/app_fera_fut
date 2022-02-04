import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { StackRoutes } from './app.routes';

export const Routes = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={theme.colors.shape_light}
        translucent
      />
      <StackRoutes />
    </NavigationContainer>
  );
};

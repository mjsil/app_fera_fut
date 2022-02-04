import React from 'react';
import { LogBox } from 'react-native';
import { ThemeProvider } from 'styled-components';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

import { HootProvider } from './src/context/HootContext';
import { Theme } from './src/global/styles';
import { Routes } from './src/routes';

export default function App() {
  return (
      <ThemeProvider theme={Theme}>
        <HootProvider>
          <Routes />
        </HootProvider>
      </ThemeProvider>
  );
};

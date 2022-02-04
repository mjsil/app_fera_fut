import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LeaguesScreen } from '../screens/Leagues';
import { SeasonsScreen } from '../screens/Seasons';
import { ClassificationScreen } from '../screens/Classification';
import { TeamScreen } from '../screens/Team';

type RootStackParamList = {
  LeaguesScreen: { name: string };
  SeasonsScreen: { name: string };
  ClassificationScreen: { name: string };
  TeamScreen: { name: string };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name='LeaguesScreen'
        component={LeaguesScreen}
      />
      <Screen
        name='SeasonsScreen'
        component={SeasonsScreen}
      />
      <Screen
        name='ClassificationScreen'
        component={ClassificationScreen}
      />
      <Screen
        name='TeamScreen'
        component={TeamScreen}
      />
    </Navigator>
  );
};

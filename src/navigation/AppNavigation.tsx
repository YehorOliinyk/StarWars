import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenEnum, StackParamList } from '../utils/types';
import { MainScreen } from '../screens/Main/MainScreen';
import { HeroScreen } from '../screens/Hero/HeroScreen';


const Stack = createStackNavigator<StackParamList>();

export const AppNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenEnum.Main}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={ScreenEnum.Main}
          component={MainScreen}
        />
        <Stack.Screen
          name={ScreenEnum.Hero}
          component={HeroScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}

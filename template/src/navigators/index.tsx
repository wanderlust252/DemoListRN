import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import ListScreen from '@screens/list';
import DetailScreen from '@screens/detail';

export const navigationRef: React.RefObject<NavigationContainerRef<any>> =
  React.createRef();
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;

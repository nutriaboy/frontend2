import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProtectedScreen } from '../screens/ProtectedScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
     
      <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
    </Stack.Navigator>
  );
}